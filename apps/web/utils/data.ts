import {
  CheckCircleIcon,
  Clipboard2Icon,
  DollarIcon,
  GalleryAddIcon,
  user,
  user1,
  user2,
  user3,
} from "@/utils/assets";
import {
  HiMiniArrowTrendingUp,
  HiMiniArrowTrendingDown,
} from "react-icons/hi2";
import {
  SettingsIcon,
  DocumentIcon,
  ClipboardIcon,
  UsersIcon,
  WidgetIcon,
  InfoIcon,
  CalendarIcon,
  ShieldUserIcon,
  UserIdIcon,
  ClockIcon,
  Widget2Icon,
} from "@/utils/assets";
import { Views } from "react-big-calendar";

export const sideBarItems = [
  {
    "menu-groupe": "Main Menu",
    items: [
      {
        "menu-item": "Dashboard",
        "menu-link": "/",
        "menu-icon": WidgetIcon,
      },
      {
        "menu-item": "Appointments",
        "menu-icon": CalendarIcon,
        "has-submenu": true,
        "submenu-items": [
          {
            "menu-item": "Appointments Overview",
            "menu-link": "/appointments/overview",
          },
          {
            "menu-item": "Appointments Calendar",
            "menu-link": "/appointments/calendar",
          },
          {
            "menu-item": "Appointments List",
            "menu-link": "/appointments/list",
          },
        ],
      },
      {
        "menu-item": "Payment",
        "menu-link": "/payment",
        "menu-icon": DollarIcon,
      },
      {
        "menu-item": "Invoices",
        "menu-link": "/invoices",
        "menu-icon": DocumentIcon,
      },
      {
        "menu-item": "Reports",
        "menu-link": "/reports",
        "menu-icon": ClipboardIcon,
      },
    ],
  },
  {
    "menu-groupe": "Other Menu",
    items: [
      {
        "menu-item": "Staff",
        "menu-icon": UsersIcon,
        "has-submenu": true,
        "submenu-items": [
          {
            "menu-item": "List staff",
            "menu-link": "/staff",
          },
          {
            "menu-item": "Add staff",
            "menu-link": "/staff/create",
          },
        ],
      },
      {
        "menu-item": "Patients",
        "menu-icon": UserIdIcon,
        "has-submenu": true,
        "submenu-items": [
          {
            "menu-item": "List patients",
            "menu-link": "/patients",
          },
          {
            "menu-item": "Add patient",
            "menu-link": "/patients/create",
          },
          {
            "menu-item": "Patient profile",
            "menu-link": "/patients/profile",
          },
        ],
      },
      {
        "menu-item": "Categories of Service",
        "menu-link": "/categories",
        "menu-icon": Widget2Icon,
      },
    ],
  },
  {
    "menu-groupe": "Help & Settings",
    items: [
      {
        "menu-item": "Setting",
        "menu-link": "/setting",
        "menu-icon": SettingsIcon,
      },
      {
        "menu-item": "My account",
        "menu-link": "/account",
        "menu-icon": ShieldUserIcon,
      },
      {
        "menu-item": "History",
        "menu-link": "/history",
        "menu-icon": ClockIcon,
      },
      {
        "menu-item": "Help",
        "menu-link": "/help",
        "menu-icon": InfoIcon,
      },
      {
        "menu-item": "Help",
        "menu-link": "/help",
        "menu-icon": InfoIcon,
      },
      {
        "menu-item": "Help",
        "menu-link": "/help",
        "menu-icon": InfoIcon,
      },
      {
        "menu-item": "Help",
        "menu-link": "/help",
        "menu-icon": InfoIcon,
      },
      {
        "menu-item": "Help",
        "menu-link": "/help",
        "menu-icon": InfoIcon,
      },
    ],
  },
];

export const days = [
  { number: "01", day: "TH" },
  { number: "02", day: "FR" },
  { number: "03", day: "SA" },
  { number: "04", day: "SU" },
  { number: "05", day: "MO" },
  { number: "06", day: "Jun" },
  { number: "07", day: "TU" },
  { number: "08", day: "WE" },
  { number: "09", day: "TH" },
  { number: "10", day: "FR" },
  { number: "11", day: "SA" },
  { number: "12", day: "SU" },
  { number: "13", day: "MO" },
  { number: "14", day: "Jun" },
  { number: "15", day: "TU" },
  { number: "16", day: "WE" },
  { number: "17", day: "TH" },
  { number: "18", day: "FR" },
  { number: "19", day: "SA" },
  { number: "20", day: "SU" },
  { number: "21", day: "MO" },
  { number: "22", day: "Jun" },
  { number: "23", day: "TU" },
  { number: "24", day: "WE" },
  { number: "25", day: "TH" },
  { number: "26", day: "FR" },
  { number: "27", day: "SA" },
  { number: "28", day: "SU" },
  { number: "29", day: "MO" },
  { number: "30", day: "Jun" },
  { number: "31", day: "Tu" },
];

export const statistics = [
  {
    id: 3,
    title: "Total Revenue",
    value: 5678.56,
    status: "+14%",
    statusIcon: HiMiniArrowTrendingUp,
    color: "brand",
    icon: DollarIcon,
  },
  {
    id: 1,
    title: "Appointments",
    value: 13,
    status: "+40%",
    statusIcon: HiMiniArrowTrendingUp,
    color: "green",
    icon: CalendarIcon,
  },
  {
    id: 2,
    title: "Patients",
    value: 267,
    status: "-31%",
    statusIcon: HiMiniArrowTrendingDown,
    color: "purple",
    icon: UserIdIcon,
  },
  {
    id: 4,
    title: "Staffs",
    value: 24,
    status: "-7%",
    statusIcon: HiMiniArrowTrendingDown,
    color: "orange",
    icon: UsersIcon,
  },
];

export const patients = [
  {
    id: 1,
    firstName: "Jhon",
    lastName: "bean",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 20,
    image: user,
    action: "Emergency Care",
    gender: "Male",
    createdAt: "06/09/2024",
  },
  {
    id: 2,
    firstName: "Tom",
    lastName: "Barrel",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 27,
    image: user1,
    action: "Surgical Procedures",
    gender: "Male",
    createdAt: "06/09/2024",
  },
  {
    id: 3,
    firstName: "Donal",
    lastName: "Cortez",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 34,
    image: user2,
    action: "Preventive Care",
    gender: "Male",
    createdAt: "06/09/2024",
  },
  {
    id: 4,
    firstName: "Bain",
    lastName: "Lemin",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 20,
    image: user3,
    action: "Emergency Care",
    gender: "Female",
    createdAt: "06/09/2024",
  },
  {
    id: 5,
    firstName: "Bain",
    lastName: "Lemin",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 43,
    image: user1,
    action: "Emergency Care",
    gender: "Female",
    createdAt: "06/09/2024",
  },
  {
    id: 6,
    firstName: "Bain",
    lastName: "Lemin",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 43,
    image: user3,
    action: "Emergency Care",
    gender: "Female",
    createdAt: "06/09/2024",
  },
  {
    id: 7,
    firstName: "Bain",
    lastName: "Lemin",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 43,
    image: user2,
    action: "Emergency Care",
    gender: "Female",
    createdAt: "06/09/2024",
  },
];

export const staff = [
  {
    id: 1,
    firstName: "Jhon",
    lastName: "bean",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 20,
    image: user,
    gender: "Male",
    createdAt: "06/13/2024",
  },
  {
    id: 2,
    firstName: "Tom",
    lastName: "Barrel",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 27,
    image: user1,
    gender: "Male",
    createdAt: "06/13/2024",
  },
  {
    id: 3,
    firstName: "Donal",
    lastName: "Cortez",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 34,
    image: user2,
    gender: "Male",
    createdAt: "06/13/2024",
  },
  {
    id: 4,
    firstName: "Bain",
    lastName: "Lemin",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 20,
    image: user3,
    gender: "Female",
    createdAt: "06/13/2024",
  },
  {
    id: 5,
    firstName: "Bain",
    lastName: "Lemin",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 43,
    image: user1,
    gender: "Female",
    createdAt: "06/13/2024",
  },
  {
    id: 6,
    firstName: "Bain",
    lastName: "Lemin",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 43,
    image: user3,
    gender: "Female",
    createdAt: "06/13/2024",
  },
  {
    id: 7,
    firstName: "Bain",
    lastName: "Lemin",
    email: "jhon@gmail.com",
    phone: "067534567",
    age: 43,
    image: user2,
    gender: "Female",
    createdAt: "06/13/2024",
  },
];

export const appointments = [
  {
    id: 1,
    no: "R00001",
    name: "Andrea Lalema",
    date: "12.05.2022",
    time: "7.00 PM",
    disease: "Heart problem",
    image: user,
  },
  {
    id: 2,
    no: "R00002",
    name: "Andrea Lalema",
    date: "12.05.2022",
    time: "7.00 PM",
    disease: "Heart problem",
    image: user1,
  },
  {
    id: 3,
    no: "R00003",
    name: "Andrea Lalema",
    date: "12.05.2022",
    time: "7.00 PM",
    disease: "Heart problem",
    image: user2,
  },
  {
    id: 4,
    no: "R00004",
    name: "Andrea Lalema",
    date: "12.05.2022",
    time: "7.00 PM",
    disease: "Heart problem",
    image: user3,
  },
  {
    id: 5,
    no: "R00004",
    name: "Andrea Lalema",
    date: "12.05.2022",
    time: "7.00 PM",
    disease: "Heart problem",
    image: user2,
  },
  {
    id: 6,
    no: "R00004",
    name: "Andrea Lalema",
    date: "12.05.2022",
    time: "7.00 PM",
    disease: "Heart problem",
    image: user1,
  },
  {
    id: 7,
    no: "R00004",
    name: "Andrea Lalema",
    date: "12.05.2022",
    time: "7.00 PM",
    disease: "Heart problem",
    image: user,
  },
  {
    id: 8,
    no: "R00004",
    name: "Andrea Lalema",
    date: "12.05.2022",
    time: "7.00 PM",
    disease: "Heart problem",
    image: user2,
  },
  {
    id: 9,
    no: "R00004",
    name: "Andrea Lalema",
    date: "12.05.2022",
    time: "7.00 PM",
    disease: "Heart problem",
    image: user1,
  },
];

export const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const categories = [
  {
    name: "Dentures",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Pediatric dentistry",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Teeth cleaning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Tooth replacement",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Crown",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Wisdom teeth",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Dental check-ups",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Dental restoration",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Dental implant",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Cosmetic dentistry",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Dental crowns",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Veneer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Orthodontics",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const time = [
  { value: "10:00 - 10:30", label: "10:00 - 10:30" },
  { value: "10:30 - 11:00", label: "10:30 - 11:00" },
  { value: "11:00 - 11:30", label: "11:00 - 11:30" },
  { value: "11:30 - 12:00", label: "11:30 - 12:00" },
  { value: "12:00 - 12:30", label: "12:00 - 12:30" },
  { value: "12:30 - 13:00", label: "12:30 - 13:00" },
  { value: "13:00 - 13:30", label: "13:00 - 13:30" },
  { value: "13:30 - 14:00", label: "13:30 - 14:00" },
  { value: "14:00 - 14:30", label: "14:00 - 14:30" },
  { value: "14:30 - 15:00", label: "14:30 - 15:00" },
  { value: "15:00 - 15:30", label: "15:00 - 15:30" },
  { value: "15:30 - 16:00", label: "15:30 - 16:00" },
  { value: "16:00 - 16:30", label: "16:00 - 16:30" },
  { value: "16:30 - 17:00", label: "16:30 - 17:00" },
];

export const diseases = [
  {
    value: "Soins Dentaires Et Parodontaux Chirurgie",
    label: "Soins Dentaires Et Parodontaux Chirurgie",
  },
  { value: "Orthodontie", label: "Orthodontie" },
  { value: "Pédodontie", label: "Pédodontie" },
  { value: "Prothése", label: "Prothése" },
  {
    value: "Blanchiment Radio Panoramique",
    label: "Blanchiment Radio Panoramique",
  },
];

export const history = [
  {
    description: "Make new appointment for patient MOHAMED",
    createdAt: "04-01-2024",
    action: "new appointment",
  },
  {
    description: "Make new appointment for patient MOHAMED",
    createdAt: "04-01-2024",
    action: "new appointment",
  },
  {
    description: "add patient IBRAHIM",
    createdAt: "04-01-2024",
    action: "add patient",
  },
  {
    description: "add patient ABDELLAH",
    createdAt: "03-01-2024",
    action: "add patient",
  },
];

export const patientSteps = [
  {
    id: 1,
    title: "Patient Details",
    description: "patient name & details",
    icon: Clipboard2Icon,
  },
  {
    id: 2,
    title: "Advanced Details",
    description: "advanced patient details",
    icon: Clipboard2Icon,
  },
  {
    id: 3,
    title: "Patient Image",
    description: "Patient image",
    icon: GalleryAddIcon,
  },
  {
    id: 4,
    title: "Complete & Confirm",
    description: "Complete & Confirm patient",
    icon: CheckCircleIcon,
  },
];

export const staffSteps = [
  {
    id: 1,
    title: "Staff Details",
    description: "patient name & details",
    icon: Clipboard2Icon,
  },
  {
    id: 2,
    title: "Advanced Details",
    description: "advanced staff details",
    icon: Clipboard2Icon,
  },
  {
    id: 3,
    title: "Staff Image",
    description: "Staff image",
    icon: GalleryAddIcon,
  },
  {
    id: 4,
    title: "Complete & Confirm",
    description: "Complete & Confirm staff",
    icon: CheckCircleIcon,
  },
];

export const payments = [
  {
    id: 1,
    firstName: "Jhon",
    lastName: "bean",
    image: user,
    disease: "Prothése",
    pay: 350,
    rest: 0,
    createdAt: "06/12/2024",
  },
  {
    id: 1,
    firstName: "Jhon",
    lastName: "bean",
    image: user1,
    disease: "Pédodontie",
    pay: 600,
    rest: 100,
    createdAt: "06/12/2024",
  },
  {
    id: 1,
    firstName: "Jhon",
    lastName: "bean",
    image: user2,
    disease: "Blanchiment Radio Panoramique",
    pay: 150,
    rest: 50,
    createdAt: "06/12/2024",
  },
];

export const calendarEvents = [
  {
    id: 1,
    title: "Team Meeting",
    start: new Date(2024, 8, 10, 10, 0),
    end: new Date(2024, 8, 10, 11, 0),
    description: "Discussing the project updates and next steps.",
  },
  {
    id: 2,
    title: "Client Presentation",
    start: new Date(2024, 8, 11, 13, 0),
    end: new Date(2024, 8, 11, 14, 0),
    description: "Presentation to showcase the new product.",
  },
];

export const VIEW_OPTIONS = [
  { id: Views.DAY, label: "Day" },
  { id: Views.WEEK, label: "Week" },
  { id: Views.MONTH, label: "Month" },
];
