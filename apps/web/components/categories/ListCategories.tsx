"use client";

// react/nextjs
import { useState } from "react";

// components
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/table/data-table";
import { DataTablePagination } from "@/components/table/pagination";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DeleteConfirmationDialog from "@/components/DeleteConfirmationDialog";

// icons
import { PenIcon, TrashIcon } from "@/utils/assets";

// others
import { Category } from "@/types/categories";
import { categories } from "@/utils/data";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import EditCategory from "./EditCategory";

const ListCategories = () => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const columns: ColumnDef<Category>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Category Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      id: "actions",
      header: () => <div className="text-left">Actions</div>,
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIsEditOpen(true)}
              variant="secondary"
              className="group h-8 w-8 p-0 hover:bg-brand/10 dark:hover:bg-brand/20 duration-200 ease-linear"
            >
              <PenIcon className="size-5 text-dark-2/60 dark:text-mistyBlue group-hover:text-brand duration-200 ease-linear" />
            </Button>
            <Button
              onClick={() => setIsDeleteOpen(true)}
              variant="secondary"
              className="group h-8 w-8 p-0 hover:bg-brand/10 dark:hover:bg-brand/20 duration-200 ease-linear"
            >
              <TrashIcon className="size-5 text-dark-2/60 dark:text-mistyBlue group-hover:text-brand duration-200 ease-linear" />
            </Button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: categories,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      pagination,
      rowSelection,
    },
  });
  return (
    <>
      <Input
        placeholder="Filter names..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm mb-4"
      />

      <div className="border-t border-dashed border-mistyBlue/20 pt-2 mt-5">
        <DataTable columns={columns} table={table} />
      </div>

      <DataTablePagination table={table} selectedRows />

      <EditCategory isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} />
      <DeleteConfirmationDialog
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
      />
    </>
  );
};

export default ListCategories;
