"use client";
import { Accordion } from "@/components/display-ui/Accordion";
import { AlertDialog } from "@/components/display-ui/AlertDialog";
import { Avatar } from "@/components/display-ui/Avatar";
import { Badge } from "@/components/display-ui/Badge";
import { Breadcrumb } from "@/components/display-ui/Breadcrumb";
import { Button } from "@/components/display-ui/Button";
import { ButtonRing } from "@/components/display-ui/ButtonRing";
import { Calendar } from "@/components/display-ui/Calendar";
import { Card } from "@/components/display-ui/Card";
import { Carousel, CarouselItem } from "@/components/display-ui/Carousel";
import { CheckBox } from "@/components/display-ui/CheckBox";
import { Drawer } from "@/components/display-ui/Drawer";
import { DropdownMenu } from "@/components/display-ui/DropdownMenu";
import {
  InfiniteCarousel,
  InfiniteCarouselItem,
} from "@/components/display-ui/InfiniteCarousel";
import { Input } from "@/components/display-ui/Input";
import OTPInput from "@/components/display-ui/InputOTP";
import { Label } from "@/components/display-ui/Label";
import {
  NavigationMenuBar,
  NavigationMenuItem,
  NavigationMenuLogo,
} from "@/components/display-ui/NavigationMenu";
import {
  NavigateItem,
  NavigateMenu,
} from "@/components/display-ui/NavigationMenuMac";
import { RadioGroup, RadioItem } from "@/components/display-ui/RadioGroup";
import { Separator } from "@/components/display-ui/Separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/components/display-ui/Table";
import { Toaster } from "@/components/display-ui/Toaster";
import { Tooltip } from "@/components/display-ui/Tooltip";
import {
  BadgeDollarSign,
  ChevronRight,
  House,
  LogIn,
  LogOut,
  Receipt,
  Settings,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [otpValue, setOtpValue] = useState("");
  const [otpValue1, setOtpValue1] = useState("");

  const tableData = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Emma Johnson",
      email: "emma.j@email.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Liam Brown",
      email: "liam.b@email.com",
      role: "Moderator",
      status: "Active",
    },
    {
      id: 4,
      name: "Olivia Davis",
      email: "olivia.d@email.com",
      role: "User",
      status: "Active",
    },
    {
      id: 5,
      name: "Noah Wilson",
      email: "noah.w@email.com",
      role: "Editor",
      status: "Suspended",
    },
    {
      id: 6,
      name: "Ava Taylor",
      email: "ava.t@email.com",
      role: "User",
      status: "Active",
    },
    {
      id: 7,
      name: "James Martin",
      email: "james.m@email.com",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Sophia Clark",
      email: "sophia.c@email.com",
      role: "Moderator",
      status: "Active",
    },
    {
      id: 9,
      name: "Mason Lee",
      email: "mason.l@email.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 10,
      name: "Isabella Hall",
      email: "isabella.h@email.com",
      role: "User",
      status: "Active",
    },
  ];

  return (
    <div className="">
      {/* ACCORDION */}
      <div className="flex justify-center items-center flex-col w-1/2 mx-auto my-10 h-screen">
        <Accordion.Main>
          <Accordion.Trigger className="">
            What is Your Name ?
          </Accordion.Trigger>

          <Accordion.Content className="">
            <p>
              {" "}
              My Name is Disha , My Friends Are Rehman , Palak , Poonam & Reshma
              . I Live in Pune , India . . . I have done my graduation from COEP
              college of Engineering Which is also in Pune .
            </p>
          </Accordion.Content>
        </Accordion.Main>

        <br />

        <Accordion.Main>
          <Accordion.Trigger>List Out Your Friends Name ?</Accordion.Trigger>

          <Accordion.Content>
            <ol>
              <li>Disha</li>
              <li>Rehman</li>
              <li>Palak</li>
              <li>Poonam</li>
              <li>Reshma</li>
            </ol>
          </Accordion.Content>
        </Accordion.Main>
      </div>

      {/* ALERT  */}
      <div className="flex justify-center items-center h-screen">
        <AlertDialog.Main>
          <AlertDialog.Trigger>Open Alert</AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Delete Confirmation</AlertDialog.Title>
            <AlertDialog.Description>
              Are you sure you want to delete this item? This action cannot be
              undone.
            </AlertDialog.Description>
            <AlertDialog.Actions>
              <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
              <AlertDialog.Confirm onClick={() => alert("Item Deleted!")}>
                Delete
              </AlertDialog.Confirm>
            </AlertDialog.Actions>
          </AlertDialog.Content>
        </AlertDialog.Main>
      </div>

      {/* AVATAR */}

      <div className="flex justify-center items-center gap-4 h-screen">
        <Avatar.Root>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Avatar"
            className=" h-full"
          />
        </Avatar.Root>

        <Avatar.Root>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Avatar"
            className="rounded-lg"
          />
        </Avatar.Root>

        <Avatar.Root>
          <Avatar.Image
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Avatar"
          />
        </Avatar.Root>
      </div>

      <br />

      <div className="flex justify-center items-center h-screen">
        <div className="flex -space-x-4">
          {" "}
          {/* -space-x-* adds negative horizontal gap */}
          <Avatar.Root className="border-2 border-white rounded-full">
            <Avatar.Image
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop"
              alt="User Avatar"
              className="rounded-full  h-full object-cover"
            />
          </Avatar.Root>
          <Avatar.Root className="border-2 border-white rounded-full">
            <Avatar.Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop"
              alt="User Avatar"
              className="rounded-full  h-full object-cover"
            />
          </Avatar.Root>
          <Avatar.Root className="border-2 border-white rounded-full">
            <Avatar.Image
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop"
              alt="User Avatar"
              className="rounded-full  h-full object-cover"
            />
          </Avatar.Root>
          <Avatar.Root className="border-2 border-white rounded-full">
            <Avatar.Image
              alt="User Avatar"
              className="rounded-full  h-full object-cover"
              src="data:image/png;base64,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"
            />
          </Avatar.Root>
        </div>
      </div>

      {/* BADGE */}
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <Badge variant="primary" radius="sm">
              <b>Hellow</b>
            </Badge>
            <Badge variant="primary" radius="sm">
              Hellow
            </Badge>
            <Badge variant="primary" radius="md">
              Hellow
            </Badge>
            <Badge variant="primary" radius="lg">
              Hellow
            </Badge>
            <Badge variant="primary" radius="pill">
              Hellow
            </Badge>
          </div>

          <div className="flex gap-4">
            <Badge variant="warning" radius="sm">
              <b>Hellow</b>
            </Badge>
            <Badge variant="warning" radius="sm">
              Hellow
            </Badge>
            <Badge variant="warning" radius="md">
              Hellow
            </Badge>
            <Badge variant="warning" radius="lg">
              Hellow
            </Badge>
            <Badge variant="warning" radius="pill">
              Hellow
            </Badge>
          </div>

          <div className="flex gap-4">
            <Badge variant="success" radius="sm">
              <b>Hellow</b>
            </Badge>
            <Badge variant="success" radius="sm">
              Hellow
            </Badge>
            <Badge variant="success" radius="md">
              Hellow
            </Badge>
            <Badge variant="success" radius="lg">
              Hellow
            </Badge>
            <Badge variant="success" radius="pill">
              Hellow
            </Badge>
          </div>

          <div className="flex gap-4">
            <Badge variant="danger" radius="sm">
              <b>Hellow</b>
            </Badge>
            <Badge variant="danger" radius="sm">
              Hellow
            </Badge>
            <Badge variant="danger" radius="md">
              Hellow
            </Badge>
            <Badge variant="danger" radius="lg">
              Hellow
            </Badge>
            <Badge variant="danger" radius="pill">
              Hellow
            </Badge>
          </div>
        </div>
      </div>

      {/* BREADCRUMB */}

      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-8">
          {/* WITHOUT ICONS */}
          <div>
            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={14} />}
                textSize="xs"
              >
                <Breadcrumb.Path>Home</Breadcrumb.Path>
                <Breadcrumb.Path>Cart</Breadcrumb.Path>
                <Breadcrumb.Path>Billing</Breadcrumb.Path>
                <Breadcrumb.Path>Shipping</Breadcrumb.Path>
                <Breadcrumb.Path>Payment</Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>

            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={16} />}
                textSize="sm"
              >
                <Breadcrumb.Path>Home</Breadcrumb.Path>
                <Breadcrumb.Path>Cart</Breadcrumb.Path>
                <Breadcrumb.Path>Billing</Breadcrumb.Path>
                <Breadcrumb.Path>Shipping</Breadcrumb.Path>
                <Breadcrumb.Path>Payment</Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>

            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={18} />}
                textSize="md"
              >
                <Breadcrumb.Path>Home</Breadcrumb.Path>
                <Breadcrumb.Path>Cart</Breadcrumb.Path>
                <Breadcrumb.Path>Billing</Breadcrumb.Path>
                <Breadcrumb.Path>Shipping</Breadcrumb.Path>
                <Breadcrumb.Path>Payment</Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>
          </div>

          {/* WITH ICONS */}

          <div>
            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={14} />}
                textSize="xs"
              >
                <Breadcrumb.Path icon={<House width={12} />}>
                  Home
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<ShoppingCart width={12} />}>
                  Cart
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<Receipt width={12} />}>
                  Billing
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<Truck width={12} />}>
                  Shipping
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<BadgeDollarSign width={12} />}>
                  Payment
                </Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>

            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={16} />}
                textSize="sm"
              >
                <Breadcrumb.Path icon={<House width={14} />}>
                  Home
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<ShoppingCart width={14} />}>
                  Cart
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<Receipt width={14} />}>
                  Billing
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<Truck width={14} />}>
                  Shipping
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<BadgeDollarSign width={14} />}>
                  Payment
                </Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>

            <div>
              <Breadcrumb.Main
                separator={<ChevronRight width={18} />}
                textSize="md"
              >
                <Breadcrumb.Path icon={<House width={16} />}>
                  Home
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<ShoppingCart width={16} />}>
                  Cart
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<Receipt width={16} />}>
                  Billing
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<Truck width={16} />}>
                  Shipping
                </Breadcrumb.Path>
                <Breadcrumb.Path icon={<BadgeDollarSign width={16} />}>
                  Payment
                </Breadcrumb.Path>
              </Breadcrumb.Main>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="h-screen">
        <div className="flex justify-center items-center gap-4 my-10">
          <Button variant="solid" size="sm">
            Rehman
          </Button>

          <Button variant="outline" size="sm">
            Disha
          </Button>

          <Button variant="ghost" size="sm">
            Palak
          </Button>

          <Button variant="link" size="sm">
            Poonam
          </Button>
        </div>

        {/* BUTTONRING */}
        <div className="flex justify-center items-center gap-4 my-10">
          <ButtonRing variant="primary" size="sm">
            Rehman
          </ButtonRing>
          <ButtonRing variant="solid" size="sm">
            Disha
          </ButtonRing>
          <ButtonRing variant="success" size="sm">
            Palak
          </ButtonRing>
          <ButtonRing variant="danger" size="sm">
            Poonam
          </ButtonRing>
        </div>
      </div>

      <div className="flex justify-center items-center mx-auto h-screen">
        <Calendar className="w-[20%]" />
      </div>

      {/* CARD */}
      <div className="flex justify-center items-center h-screen">
        <div className="">
          <Card.Main className="bg-white w-[80%]" shadow="md">
            <Card.Area className="">
              <Card.Image
                className="scale-100"
                radius="none"
                fit="cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></Card.Image>
            </Card.Area>
            <Card.Area className="p-4">
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Card Section</h2>
                <p className="text-md">
                  A card component is a reusable UI element used to group
                  related content and actions together inside a contained,
                  visually distinct block .{" "}
                </p>

                <div className="flex justify-center">
                  <ButtonRing size="sm" variant="success" className="my-2">
                    Hire Me
                  </ButtonRing>
                </div>
              </div>
            </Card.Area>
          </Card.Main>
        </div>

        <div className="">
          <Card.Main className="bg-white w-[80%]" shadow="md">
            <Card.Area className="">
              <Card.Image
                className="scale-100"
                radius="none"
                fit="cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></Card.Image>
            </Card.Area>
            <Card.Area className="p-4">
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Card Section</h2>
                <p className="text-md">
                  A card component is a reusable UI element used to group
                  related content and actions together inside a contained,
                  visually distinct block .{" "}
                </p>

                <div className="flex justify-center">
                  <ButtonRing size="md" variant="success" className="my-2">
                    Hire Me
                  </ButtonRing>
                </div>
              </div>
            </Card.Area>
          </Card.Main>
        </div>

        <div className="">
          <Card.Main className="bg-white w-[80%]" shadow="md">
            <Card.Area className="">
              <Card.Image
                className="scale-100"
                radius="none"
                fit="cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></Card.Image>
            </Card.Area>
            <Card.Area className="p-4">
              <div className="space-y-4">
                <h2 className="text-xl font-bold">Card Section</h2>
                <p className="text-md">
                  A card component is a reusable UI element used to group
                  related content and actions together inside a contained,
                  visually distinct block .{" "}
                </p>

                <div className="flex justify-center">
                  <ButtonRing size="lg" variant="success" className="my-2">
                    Hire Me
                  </ButtonRing>
                </div>
              </div>
            </Card.Area>
          </Card.Main>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="flex justify-center items-center my-10 h-screen">
        <Carousel size="lg" autoPlay intervalMs={4000} className="mx-auto mt-8">
          <CarouselItem className="bg-white h-64 flex items-center justify-center text-white text-2xl">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="bg-blue-400 h-64 flex items-center justify-center text-white text-2xl">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="bg-green-400 h-64 flex items-center justify-center text-white text-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </CarouselItem>
        </Carousel>
      </div>

      {/* CHECKBOX */}
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col justify-start gap-4">
          <div className="flex justify-start items-center gap-3">
            <CheckBox variant="dark" boxSize="md"></CheckBox>
            <label htmlFor="dark">I agree the terms and conditions</label>
          </div>

          <div className="flex justify-start items-center gap-3">
            <CheckBox variant="primary" boxSize="md"></CheckBox>
            <label htmlFor="primary">I agree the terms and conditions</label>
          </div>

          <div className="flex justify-start items-center gap-3">
            <CheckBox variant="success" boxSize="md"></CheckBox>
            <label htmlFor="success">Yes , apply the edited changes</label>
          </div>

          <div className="flex justify-start items-center gap-3">
            <CheckBox variant="danger" boxSize="md"></CheckBox>
            <label htmlFor="danger">
              Yes delete account , action cannot be undone
            </label>
          </div>
        </div>
      </div>

      {/* DRAWER */}
      <div className="h-screen flex justify-center items-center gap-10">
        <div className=" flex justify-center items-center">
          <Drawer.Main side="bottom" className="">
            <Drawer.Trigger className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Below Drawer
            </Drawer.Trigger>
            {/* w-[50%] => if right or left for overlapping the main screen horizontally*/}
            {/* h-[50%] => if top or bottom for overlapping the main screen vertically*/}
            <Drawer.Content className="p-6 bg-white shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Drawer Title</h2>
              <p className="text-sm text-gray-600 mb-6">
                This is a simple drawer for testing. You can add any content you
                want here.
              </p>
              <Drawer.Close className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Close
              </Drawer.Close>
            </Drawer.Content>
          </Drawer.Main>
        </div>

        <div className=" flex justify-center items-center">
          <Drawer.Main side="top" className="">
            <Drawer.Trigger className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Top Drawer
            </Drawer.Trigger>
            {/* w-[50%] => if right or left for overlapping the main screen horizontally*/}
            {/* h-[50%] => if top or bottom for overlapping the main screen vertically*/}
            <Drawer.Content className="p-6 bg-white shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Drawer Title</h2>
              <p className="text-sm text-gray-600 mb-6">
                This is a simple drawer for testing. You can add any content you
                want here.
              </p>
              <Drawer.Close className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Close
              </Drawer.Close>
            </Drawer.Content>
          </Drawer.Main>
        </div>

        <div className=" flex justify-center items-center">
          <Drawer.Main side="left" className="">
            <Drawer.Trigger className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Left Drawer
            </Drawer.Trigger>
            {/* w-[50%] => if right or left for overlapping the main screen horizontally*/}
            {/* h-[50%] => if top or bottom for overlapping the main screen vertically*/}
            <Drawer.Content className="p-6 bg-white shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Drawer Title</h2>
              <p className="text-sm text-gray-600 mb-6">
                This is a simple drawer for testing. You can add any content you
                want here.
              </p>
              <Drawer.Close className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Close
              </Drawer.Close>
            </Drawer.Content>
          </Drawer.Main>
        </div>

        <div className=" flex justify-center items-center">
          <Drawer.Main side="right" className="">
            <Drawer.Trigger className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Right Drawer
            </Drawer.Trigger>
            {/* w-[50%] => if right or left for overlapping the main screen horizontally*/}
            {/* h-[50%] => if top or bottom for overlapping the main screen vertically*/}
            <Drawer.Content className="p-6 bg-white shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Drawer Title</h2>
              <p className="text-sm text-gray-600 mb-6">
                This is a simple drawer for testing. You can add any content you
                want here.
              </p>
              <Drawer.Close className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Close
              </Drawer.Close>
            </Drawer.Content>
          </Drawer.Main>
        </div>
      </div>

      {/* DROPDOWN MENU */}
      <div className="h-screen flex justify-center items-center">
        <DropdownMenu.Main>
          <DropdownMenu.Trigger>Profile</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("View Profile")}
              icon={<House className="w-4 h-4" />}
            >
              <span>My Profile</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("View Profile")}
              icon={<Receipt className="w-4 h-4" />}
            >
              <span>Billings</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("View Profile")}
              icon={<Settings className="w-4 h-4" />}
            >
              <span>Settings</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("Settings")}
              icon={<LogIn className="w-4 h-4" />}
            >
              <span>Login</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("Logout")}
              icon={<LogOut className="w-4 h-4" />}
            >
              <span>Logout</span>
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className="flex justify-start items-center gap-4"
              onClick={() => alert("Logout")}
              icon={<Truck className="w-4 h-4" />}
            >
              <span>Support</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Main>
      </div>

      {/* INFINITE CAROUSEL */}
      <div className="h-screen flex justify-center items-center">
        <InfiniteCarousel pauseOnHover={true} speed={60}>
          <InfiniteCarouselItem
            href="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="mx-4 h-64"
          >
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt=""
              className="w-64 h-64 object-cover rounded-lg"
            />
          </InfiniteCarouselItem>
          <InfiniteCarouselItem
            href="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="mx-4 h-64"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt=""
              className="w-64 h-64 object-cover rounded-lg"
            />
          </InfiniteCarouselItem>
          <InfiniteCarouselItem
            href="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="mx-4 h-64"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt=""
              className="w-64 h-64 object-cover rounded-lg"
            />
          </InfiniteCarouselItem>
          <InfiniteCarouselItem
            href="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="mx-4 h-64"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt=""
              className="w-64 h-64 object-cover rounded-lg"
            />
          </InfiniteCarouselItem>
          <InfiniteCarouselItem
            href="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="mx-4 h-64"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt=""
              className="w-64 h-64 object-cover rounded-lg"
            />
          </InfiniteCarouselItem>
          <InfiniteCarouselItem
            href="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
            className="mx-4 h-64"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt=""
              className="w-64 h-64 object-cover rounded-lg"
            />
          </InfiniteCarouselItem>
        </InfiniteCarousel>
      </div>

      {/* INPUT */}
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center w-1/4">
          <Label>Input Text</Label>
          <Input border="primary" type="text" placeholder="Enter Any Text" />
          <Label>Input Email</Label>
          <Input border="primary" type="email" placeholder="Enter Your Email" />
          <Label>Input Password</Label>
          <Input
            border="primary"
            type="password"
            placeholder="Enter Your Password"
          />
          <Label>Input Number</Label>
          <Input
            border="primary"
            type="number"
            placeholder="Enter Any Number"
          />
        </div>
      </div>

      {/* INPUT OTP */}
      <div className="h-screen flex flex-col justify-center items-center gap-20">
        <div>
          <OTPInput
            length={4}
            disabled={false}
            value={otpValue}
            onComplete={(val) => {
              setOtpValue(val);
            }}
          />
          <div className="text-sm text-gray-600">
            Current Value: <span className="font-mono">{otpValue}</span>
          </div>
        </div>

        <div className="">
          <OTPInput
            length={6}
            disabled={false}
            value={otpValue1}
            onComplete={(val) => {
              setOtpValue1(val);
            }}
          />
          <div className="text-sm text-gray-600">
            Current Value: <span className="font-mono">{otpValue1}</span>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="h-screen flex justify-center items-center">
        <Label>Hello , This is label</Label>
      </div>

      {/* NAVIGATION MENU */}
      <div className="h-screen flex justify-center items-center">
        <NavigationMenuBar>
          <NavigationMenuLogo
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className=""
          ></NavigationMenuLogo>
          <NavigationMenuItem
            href="/?path=/story/components-avatar--default"
            className="p-2 rounded focus:bg-purple-400 hover:bg-blue-400"
            target="_blank"
          >
            <Label>Avatar</Label>
          </NavigationMenuItem>
          <NavigationMenuItem
            href="/?path=/story/components-badge--default"
            className="p-2 rounded focus:bg-purple-400 hover:bg-blue-400"
            target="_blank"
          >
            <Label>Badge</Label>
          </NavigationMenuItem>
          <NavigationMenuItem
            href="/?path=/story/components-buttonring--default"
            className="p-2 rounded focus:bg-purple-400 hover:bg-blue-400"
            target="_blank"
          >
            <Label>Button</Label>
          </NavigationMenuItem>
          <NavigationMenuItem
            href="/?path=/story/components-drawer--default"
            className="p-2 rounded focus:bg-purple-400 hover:bg-blue-400"
            target="_blank"
          >
            <Label>Drawer</Label>
          </NavigationMenuItem>
          <NavigationMenuItem
            href="/?path=/story/components-infinitecarousel--default"
            className="p-2 rounded focus:bg-purple-400 hover:bg-blue-400"
            target="_blank"
          >
            <Label>Carousel</Label>
          </NavigationMenuItem>
        </NavigationMenuBar>
      </div>

      {/* NAVIGATION MENU MAC */}
      <div>
        <NavigateMenu>
          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            alt="Next"
            onClick={() => {
              alert("Next");
            }}
            tooltipContent="Next"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
            onClick={() => {
              alert("React");
            }}
            tooltipContent="React"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
            alt="Nest"
            onClick={() => {
              alert("Nest");
            }}
            tooltipContent="Nest"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxt/nuxt-original.svg"
            alt="Nuxt"
            onClick={() => {
              alert("Nuxt");
            }}
            tooltipContent="Nuxt"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg"
            alt="Kaggle"
            onClick={() => {
              alert("Kaggle");
            }}
            tooltipContent="Kaggle"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
            alt="Nuxt"
            onClick={() => {
              alert("Nuxt");
            }}
            tooltipContent="Nuxt"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
            alt="Axios"
            onClick={() => {
              alert("Axios");
            }}
            tooltipContent="Axios"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dyalog/dyalog-plain.svg"
            alt="Dyalog"
            onClick={() => {
              alert("Dyalog");
            }}
            tooltipContent="Dyalog"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
            alt="Django"
            onClick={() => {
              alert("Django");
            }}
            tooltipContent="Django"
          />

          <NavigateItem
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
            alt="Fast-API"
            onClick={() => {
              alert("Fast-API");
            }}
            tooltipContent="Fast-API"
          />
        </NavigateMenu>
      </div>

      {/* RADIO GROUP */}
      <div className="">
        <RadioGroup className="h-screen flex flex-col justify-center items-center gap-8">
          {/* Default */}
          <div className="flex items-center gap-2">
            <RadioItem value="default" />
            <Label className="font-semibold">Default</Label>
          </div>

          {/* Success */}
          <div className="flex items-center gap-2">
            <RadioItem value="success" variant="success" />
            <Label className="font-semibold">Success</Label>
          </div>

          {/* Danger */}
          <div className="flex items-center gap-2">
            <RadioItem value="danger" variant="danger" />
            <Label className="font-semibold">Danger</Label>
          </div>

          {/* Warning */}
          <div className="flex items-center gap-2">
            <RadioItem value="warning" variant="warning" />
            <Label className="font-semibold">Warning</Label>
          </div>
        </RadioGroup>
      </div>

      {/* SEPARATOR */}
      <div className="h-screen flex justify-center items-center flex-col mb-8">
        <p>Small spacing separator</p>
        <Separator
          variant="default"
          size="lg"
          className="bg-yellow-500 w-[40%]"
        />

        <br />

        <p>Medium spacing separator</p>
        <Separator
          variant="default"
          size="lg"
          className="bg-orange-500 w-[40%]"
        />

        <br />

        <p>Large spacing separator</p>
        <Separator
          variant="default"
          size="lg"
          className="bg-purple-500 w-[40%]"
        />
      </div>

      <div className=" mb-8 flex gap-4 justify-center items-center h-screen">
        <Separator size="lg" className="bg-yellow-500 w-[40%]" />
        <p>OR</p>
        <Separator size="lg" className="bg-yellow-500 w-[40%]" />
      </div>

      <div className=" mb-8 flex flex-col gap-25 items-center h-screen">
        {" "}
        <Separator size="lg" className="bg-yellow-400 rotate-90 w-[20%]" />
        <p className="my-10">OR</p>{" "}
        <Separator size="lg" className="bg-yellow-400 rotate-90 w-[20%]" />
      </div>

      {/* TABLE */}
      <div className="h-screen flex justify-center items-center">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Sr no.</TableHeadCell>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
              <TableHeadCell>Status</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data, index) => {
              return (
                <>
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.role}</TableCell>
                    <TableCell>
                      <span
                        className={`p-1 rounded-lg 
                        ${data.status === "Active" && "bg-green-400 "} 
                        ${data.status === "Inactive" && "bg-yellow-400 "} 
                        ${data.status === "Suspended" && "bg-red-500 "}`}
                      >
                        {data.status}
                      </span>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* TOASTER */}
      <div className="h-screen flex flex-col justify-center items-center gap-10">
        <div>
          <Toaster.Main>
            <Toaster.Trigger
              message="Profile updated successfully!"
              toastType="success"
              position="top-right"
            >
              <Button
                variant="solid"
                size="sm"
                className="bg-green-500 hover:bg-green-600"
              >
                Success
              </Button>
            </Toaster.Trigger>
          </Toaster.Main>
        </div>

        <div>
          <Toaster.Main>
            <Toaster.Trigger
              message="Something went wrong!"
              toastType="error"
              position="top-left"
            >
              <Button
                variant="solid"
                size="sm"
                className="bg-red-600 hover:bg-red-700"
                radius="md"
              >
                Show Error
              </Button>
            </Toaster.Trigger>
          </Toaster.Main>
        </div>

        <div>
          <Toaster.Main>
            <Toaster.Trigger
              message="Information message displayed."
              toastType="info"
              position="bottom-right"
            >
              <Button
                variant="solid"
                size="sm"
                className="bg-blue-500 hover:bg-blue-600"
              >
                Info
              </Button>
            </Toaster.Trigger>
          </Toaster.Main>
        </div>

        <div>
          <Toaster.Main>
            <Toaster.Trigger
              message="Please review your input again!"
              toastType="warning"
              position="bottom-left"
            >
              <Button
                variant="solid"
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-600"
              >
                Warning
              </Button>
            </Toaster.Trigger>
          </Toaster.Main>
        </div>

        <div>
          <Toaster.Main>
            <Toaster.Trigger
              message="Custom duration example (6 seconds)"
              toastType="info"
              position="top-right"
              duration={6000}
            >
              <Button variant="outline" size="sm">
                6s Duration
              </Button>
            </Toaster.Trigger>
          </Toaster.Main>
        </div>
      </div>

      {/* TOOLTIP */}
      <div className="flex justify-center items-center h-screen gap-70">
        <div className="flex flex-col gap-20">
          <div>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button>Hover me</Button>
              </Tooltip.Trigger>
              <Tooltip.Content content="I am a tooltip!" position="top" />
            </Tooltip.Root>
          </div>

          <div>
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button>Hover me</Button>
              </Tooltip.Trigger>
              <Tooltip.Content
                content="Tooltip at the bottom"
                position="bottom"
              />
            </Tooltip.Root>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <div className="flex justify-center items-center">
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button>Hover me</Button>
              </Tooltip.Trigger>
              <Tooltip.Content content="Tooltip on the left" position="left" />
            </Tooltip.Root>
          </div>

          <div className="flex justify-center items-center">
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button>Hover me</Button>
              </Tooltip.Trigger>
              <Tooltip.Content
                content="Tooltip on the right"
                position="right"
              />
            </Tooltip.Root>
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center">
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button>Hover me</Button>
              </Tooltip.Trigger>
              <Tooltip.Content content="I am a tooltip!" position="simple" />
            </Tooltip.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
