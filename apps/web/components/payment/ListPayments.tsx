"use client";

// react/nextjs
import { useState } from "react";
import Image from "next/image";

// components
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/table/data-table";
import { DataTablePagination } from "@/components/table/pagination";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import DeleteConfirmationDialog from "@/components/DeleteConfirmationDialog";

// icons
import {
  FolderIcon,
  PenIcon,
  SortVerticalIcon,
  TrashIcon,
} from "@/utils/assets";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

// others
import { payments } from "@/utils/data";
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
import EditPayment from "./EditPayment";
import { Payment } from "@/types/payment";
import { Textarea } from "../ui/textarea";

const ListPayments = () => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const columns: ColumnDef<Payment>[] = [
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
            Patient Name
            <SortVerticalIcon className="size-5" />
          </button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("firstName")}</div>
      ),
    },
    {
      accessorKey: "disease",
      header: ({ column }) => {
        return (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Disease
            <SortVerticalIcon className="size-5" />
          </button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase text-brand bg-brand/10 px-3 py-1 rounded-md inline-block text-xs">
          {row.getValue("disease")}
        </div>
      ),
    },
    {
      accessorKey: "pay",
      header: "Pay",
    },
    {
      accessorKey: "rest",
      header: "Rest",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
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
              <DropdownMenuItem
                onClick={() => setIsEditOpen(true)}
                className="cursor-pointer"
              >
                <PenIcon className="size-5" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setIsDeleteOpen(true)}
                className="cursor-pointer"
              >
                <TrashIcon className="size-5" />
                Cancel
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: payments,
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
          placeholder="Filter names..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
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

      <EditPayment isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} />
      <DeleteConfirmationDialog
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
      >
        <label className="-mb-2 dark:text-white text-dark-2 font-medium text-sm mt-3">
          Note about canceling this payment.
        </label>
        <Textarea />
      </DeleteConfirmationDialog>
    </>
  );
};

export default ListPayments;
