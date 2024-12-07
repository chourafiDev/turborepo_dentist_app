"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";

const Revenue = () => {
  const { theme } = useTheme();

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "-2%",
      left: "center",
      textStyle: {
        color: theme === "light" ? "#11111D" : "#a3aed1",
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: theme === "light" ? "#fff" : "#11111D",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        data: [
          { value: 1048, name: "Dentures" },
          { value: 735, name: "Pediatric dentistry" },
          { value: 580, name: "Teeth cleaning" },
        ],
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="flex md:flex-row flex-col gap-2 justify-between md:items-center items-start">
        <CardTitle>Revenue by category</CardTitle>

        <Select>
          <SelectTrigger className="w-36 py-1 px-3 font-medium">
            <SelectValue placeholder="Select a year" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex md:flex-row flex-col md:gap-0 gap-6 md:items-center items-start md:mt-0 mt-6">
        <ul className="flex-1 text-dark-2 dark:text-white font-medium space-y-5">
          <li className="pl-4 relative before:absolute before:left-0 before:top-3 before:h-6 before:w-1 before:rounded-full before:bg-brand">
            <p>Dentures (45%)</p>
            <p className="text-dark-2/40 dark:text-mistyBlue text-sm">398 DH</p>
          </li>
          <li className="pl-4 relative before:absolute before:left-0 before:top-3 before:h-6 before:w-1 before:rounded-full before:bg-brand">
            <p>Pediatric dentistry (30%)</p>
            <p className="text-dark-2/40 dark:text-mistyBlue text-sm">
              2456 DH
            </p>
          </li>
          <li className="pl-4 relative before:absolute before:left-0 before:top-3 before:h-6 before:w-1 before:rounded-full before:bg-brand">
            <p>Teeth cleaning (25%)</p>
            <p className="text-dark-2/40 dark:text-mistyBlue text-sm">156 DH</p>
          </li>
        </ul>
        <div className="flex-1 h-72 w-full">
          <ReactECharts option={option} className="mt-5 h-full w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Revenue;
