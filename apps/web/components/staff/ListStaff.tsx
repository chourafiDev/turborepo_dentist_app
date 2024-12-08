"use client";

import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/table/data-table";
import { DataTablePagination } from "@/components/table/pagination";
import { Button } from "@/components/ui/button";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { staff } from "@/utils/data";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import DeleteConfirmationDialog from "@/components/ui/delete-confirmation-dialog";
import {
  FolderIcon,
  PenIcon,
  SortVerticalIcon,
  TrashIcon,
} from "@/utils/assets";
import Link from "next/link";
import { Staff } from "@/types/staff";

const ListStaff = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const columns: ColumnDef<Staff>[] = [
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
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => (
        <Image
          src={row.getValue("image")}
          alt={row.getValue("firstName")}
          width={35}
          height={35}
          className="rounded-full object-cover"
        />
      ),
    },
    {
      accessorKey: "firstName",
      header: ({ column }) => {
        return (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            First Name
            <SortVerticalIcon className="size-5" />
          </button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("firstName")}</div>
      ),
    },
    {
      accessorKey: "lastName",
      header: ({ column }) => {
        return (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Last Name
            <SortVerticalIcon className="size-5" />
          </button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("lastName")}</div>
      ),
    },
    {
      accessorKey: "gender",
      header: "Gender",
      cell: ({ row }) => (
        <div
          className={cn(
            "inline-block px-4 py-1 rounded-lg font-medium text-[12px]",
            row.getValue("gender") == "Male"
              ? "bg-purple/10 text-purple"
              : "bg-orange/10 text-orange"
          )}
        >
          {row.getValue("gender")}
        </div>
      ),
    },
    {
      accessorKey: "age",
      header: "Age",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      id: "actions",
      header: () => <div className="text-left">Actions</div>,
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link
                  href={`/staff/${row.id}`}
                  className="flex items-center gap-3"
                >
                  <PenIcon className="size-5" /> Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setIsDeleteOpen(true)}
                className="cursor-pointer"
              >
                <TrashIcon className="size-5" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: staff,
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
      <div className="flex md:flex-row flex-col justify-between md:items-center items-start gap-4 mb-4">
        <Input
          placeholder="Filter first names..."
          value={
            (table.getColumn("firstName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("firstName")?.setFilterValue(event.target.value)
          }
          className="lg:w-[60%] w-full"
        />
        <Button variant={"dashed"} className="shadow-none py-5">
          <FolderIcon className="size-5" /> Export to Excel
        </Button>
      </div>

      <div className="border-t border-dashed border-mistyBlue/20 pt-2 mt-5">
        <DataTable columns={columns} table={table} />
      </div>

      <DataTablePagination table={table} selectedRows />

      <DeleteConfirmationDialog
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
      />
    </>
  );
};

export default ListStaff;
