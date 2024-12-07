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

const AppointmentsPatients = () => {
  const option = {
    legend: {
      data: ["Appointments", "Patients"],
      textStyle: {
        color: "#a3aed1",
        fontFamily: "Arial, Montserrat",
      },
    },
    tooltip: {
      trigger: "axis",
      formatter: "Appointments <br/>{b} : {c}",
      textStyle: {
        color: "#003566",
      },
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#a3aed14f",
        },
      },
    },
    series: [
      {
        name: "Appointments",
        type: "line",
        symbolSize: 0,
        symbol: "",
        smooth: true,
        lineStyle: {
          color: "#845ADF",
          width: 3,
          shadowColor: "rgba(0,0,0,0.3)",
          shadowBlur: 10,
          shadowOffsetY: 8,
        },
        textStyle: {
          color: "#003566",
        },
        itemStyle: {
          color: "#845ADF",
        },
        data: ["20", "100", "80", "130", "40", "90", "20"],
      },
      {
        name: "Patients",
        type: "line",
        symbolSize: 0,
        symbol: "",
        smooth: true,
        lineStyle: {
          color: "#1c84ee",
          width: 3,
          shadowColor: "rgba(0,0,0,0.3)",
          shadowBlur: 10,
          shadowOffsetY: 8,
        },
        itemStyle: {
          color: "#1c84ee",
        },
        data: ["40", "90", "160", "100", "120", "100", "50"],
      },
    ],
  };
  return (
    <Card>
      <CardHeader className="flex md:flex-row flex-col gap-2 justify-between md:items-center items-start">
        <CardTitle>Appointments & Patients</CardTitle>

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
      <CardContent>
        <ReactECharts option={option} />
      </CardContent>
    </Card>
  );
};

export default AppointmentsPatients;
