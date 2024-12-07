"use client";

// react / nextjs
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Icons
import { IoIosArrowRoundForward } from "react-icons/io";

// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/table/data-table";
import { Input } from "@/components/ui/input";
import { DataTablePagination } from "@/components/table/pagination";

// Othre
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
import { Patient } from "@/types/patient";
import { patients } from "@/utils/data";
import { cn } from "@/lib/utils";

const Patients = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const columns: ColumnDef<Patient>[] = [
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
      header: "Patient name",
      cell: ({ row }) => (
        <p>
          {row.getValue("firstName")} {row.getValue("lastName")}
        </p>
      ),
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
      accessorKey: "gender",
      header: "Gender",
      cell: ({ row }) => (
        <div
          className={cn(
            "inline-block px-4 py-1 rounded-lg text-[12px]",
            row.getValue("gender") == "Male"
              ? "bg-purple/10 text-purple"
              : "bg-orange/10 text-orange"
          )}
        >
          {row.getValue("gender")}
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: patients,
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
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>Recent Patients</CardTitle>
        <Link
          href="/patients"
          className="flex items-center gap-2 text-xs text-mistyBlue font-medium hover:text-brand duration-300 transition-colors ease-in"
        >
          Show more <IoIosArrowRoundForward className="text-xl" />
        </Link>
      </CardHeader>

      <CardContent>
        <Input
          placeholder="Filter names..."
          value={
            (table.getColumn("firstName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("firstName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm mb-4"
        />

        <DataTable columns={columns} table={table} />
        <DataTablePagination table={table} />
      </CardContent>
    </Card>
  );
};

export default Patients;
