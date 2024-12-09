"use client";

import { DataTable } from "@/components/data-table-components/data-table";
import { staff } from "@/utils/data";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Staff } from "@/types/staff";
import { DataTableColumnHeader } from "../data-table-components/data-table-column-header";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PenIcon, TrashIcon } from "@/utils/assets";
import { useState } from "react";
import DeleteConfirmationDialog from "../ui/delete-confirmation-dialog";
import StaffFilters from "./staff-filters";
import { cn } from "@/lib/utils";

const ListStaff = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

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
          className="translate-y-0.5"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-0.5"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "image",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Image" />
      ),
      cell: ({ row }) => (
        <Image
          src={row.getValue("image")}
          alt={row.getValue("firstName")}
          width={35}
          height={35}
          className="rounded-full object-cover"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "fullName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Full Name" />
      ),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("fullName")}</div>
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "age",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Age" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="truncate font-medium capitalize">
              {row.getValue("age")}
            </span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "gender",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Gender" />
      ),
      cell: ({ row }) => {
        return (
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
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="truncate font-medium capitalize">
              {row.getValue("email")}
            </span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "phone",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Phone" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="truncate font-medium capitalize">
              {row.getValue("phone")}
            </span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
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
                  <PenIcon className="size-4" /> Edit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setIsDeleteOpen(true)}
                className="cursor-pointer"
              >
                <TrashIcon className="size-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <>
      <StaffFilters />
      <DataTable data={staff} columns={columns} />
      <DeleteConfirmationDialog
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
      />
    </>
  );
};

export default ListStaff;
