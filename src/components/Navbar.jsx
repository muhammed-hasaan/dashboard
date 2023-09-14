import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import React from "react";
import logo1234567890 from '../pictures/logo1234567890.png'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import userimg from '../pictures/userimg1.jpeg'
export function Webnavbar() {
  return (
    <div className="fixed w-full bg-white">
      <Navbar className="border-2" >
        <NavbarBrand className="m-0">
          <img src={logo1234567890} className="h-20 w-20 m-0" />
          <p className="font-bold text-inherit m-0 text-sm" style={{ paddingBottom: "3px", color: "#56613F" }}>
            <span className="align-middle" style={{ marginLeft: "30px" }} >The</span>
            <p className="text-4xl" style={{ marginTop: "-15px" }}>Good App</p>
          </p>
        </NavbarBrand>
        <div className="flex items-center ">
          <Dropdown placement="bottom-end" className="bg-white">
            <DropdownTrigger>
              <img src={userimg} size="md" className=" h-14 w-14 mx-5 my-3 rounded-full" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold" >zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">
                My Settings
              </DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem><DropdownItem key="analytics">
                Analytics
              </DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown placement="bottom-start" className="bg-white">
            <h1>User Name <p className="text-xs" style={{ marginTop: "-4px" }}> User Email</p></h1>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
}
