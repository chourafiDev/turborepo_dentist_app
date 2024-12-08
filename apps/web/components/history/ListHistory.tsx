"use client";

// react/nextjs
import { useState } from "react";

// components
import { DataTable } from "@/components/table/data-table";
import { DataTablePagination } from "@/components/table/pagination";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DeleteConfirmationDialog from "@/components/ui/delete-confirmation-dialog";
import EditAppointment from "@/components/appointment/EditAppointment";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarLineIcon } from "@/utils/assets";

// icons
import { FolderIcon, SortVerticalIcon, TrashIcon } from "@/utils/assets";

// others
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
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { History } from "@/types/History";
import { history } from "@/utils/data";
import { AnimatePresence, motion } from "framer-motion";

const ListHistory = () => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const columns: ColumnDef<History>[] = [
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
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
    },
    {
      accessorKey: "action",
      header: ({ column }) => {
        return (
          <button
            className="flex items-center gap-2"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Action
            <SortVerticalIcon className="size-5" />
          </button>
        );
      },
      cell: ({ row }) => (
        <button
          className={cn(
            "inline-block px-4 py-1 rounded-lg font-medium text-[12px]",
            row.getValue("action") == "new appointment"
              ? "bg-purple/10 text-purple"
              : "bg-orange/10 text-orange"
          )}
        >
          {row.getValue("action")}
        </button>
      ),
    },
    {
      id: "actions",
      header: () => <div className="text-left">Actions</div>,
      cell: ({ row }) => {
        return (
          <Button
            onClick={() => setIsDeleteOpen(true)}
            variant="secondary"
            className="group h-8 w-8 p-0 hover:bg-brand/10 dark:hover:bg-brand/20 duration-200 ease-linear"
          >
            <TrashIcon className="size-5 text-dark-2/60 dark:text-mistyBlue group-hover:text-brand duration-200 ease-linear" />
          </Button>
        );
      },
    },
  ];

  const table = useReactTable({
    data: history,
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
        <div className={cn("grid gap-2 md:w-auto w-full")}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "md:w-[300px] w-full justify-start text-left text-dark-2/60 font-medium shadow-none py-5 bg-white dark:bg-dark dark:text-white border dark:border-mistyBlue/10",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarLineIcon className="size-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Filter by date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>

        <Button variant={"dashed"} className="shadow-none py-5">
          <FolderIcon className="size-5" /> Export to Excel
        </Button>
      </div>

      <div className="border-t border-dashed border-mistyBlue/20 pt-2 mt-5">
        <AnimatePresence>
          {rowSelection && Object.keys(rowSelection).length !== 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-2"
            >
              <Button variant={"destructive"}>Delete all</Button>
            </motion.div>
          )}
        </AnimatePresence>

        <DataTable columns={columns} table={table} />
      </div>

      <DataTablePagination table={table} selectedRows />

      <EditAppointment isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} />
      <DeleteConfirmationDialog
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
      />
    </>
  );
};

export default ListHistory;
