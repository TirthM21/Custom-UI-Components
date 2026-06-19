"use client";
import React from "react";
import AppBar from "../components/AppBar";
import Button from "../components/Button";
import DateTimePicker from "../components/DateTimePicker";
import IconButton from "../components/IconButton";
import { Icons } from "../components/Icon/icons";
import InputNumber from "../components/InputNumber";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import InputText from "../components/InputText";
import Progress from "../components/Progress";
import Modal from "../components/Modal";
import Menu from "../components/Menu";
import Typography from "../components/Typography";
import Card from "../components/Card";
import Login from "../components/Login";
import Register from "../components/Register";
import Table from "../components/Table";
import { ChartBar, ChartLine, ChartPie } from "../components/Chart/index";
import CustomDrawerSidebar from "../components/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import CustomRating from "../components/Ratings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import DynamicSpeedDial from "../components/Speed-dial"; // Adjust the import path accordingly
import CustomNavbar from "@/components/Navbar";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const handleAdd = () => {
  console.log("Add action clicked");
  // Implement add functionality here
};
const menuItems = ["Home", "About", "Services", "Contact"];

const handleEdit = () => {
  console.log("Edit action clicked");
  // Implement edit functionality here
};

const handleDelete = () => {
  console.log("Delete action clicked");
  // Implement delete functionality here
};

const actions = [
  { icon: <AddIcon />, name: "Add", onClick: handleAdd },
  { icon: <EditIcon />, name: "Edit", onClick: handleEdit },
  { icon: <DeleteIcon />, name: "Delete", onClick: handleDelete },
];
const drawerItems = [
  { icon: <MenuIcon />, text: "Home" },
  { icon: "/path/to/image.png", title: "Custom Title", text: "Item 1 Description" },
  { icon: <AccountCircleIcon />, text: "Profile" },
  { divider: true },
  { icon: "/path/to/another/image.png", text: "Item 2" },
  { text: "Item 3 without icon" },
]; //
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-wrap gap-4">
        <CustomNavbar
          title="My App"
          menuItems={menuItems}
          showSearch={true}
          showMenuIcon={true}
          position="fixed"
          enableColorOnDark={true}
        />
        <DynamicSpeedDial
          ariaLabel="SpeedDial example"
          actions={actions}
          openIcon={<EditIcon />}
          direction="up"
          open
          hidden={false}
          transitionDuration={300}
          sx={{ zIndex: 1000 }}
        />
        {/* Button Components */}
        <Typography variant="pagetitle">Rating Examples</Typography>

        <CustomRating title="Controlled" defaultValue={3} precision={0.5} />

        <CustomRating title="Read only" defaultValue={4} precision={0.5} disabled />

        <CustomRating
          title="Disabled"
          defaultValue={2.5}
          precision={0.5}
          customIcon={<StarIcon fontSize="inherit" />}
          customEmptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <CustomDrawerSidebar items={drawerItems} />

        <div style={{ width: "400px" }}>
          <h2>Bar Chart Example</h2>
          <ChartBar
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "Sales",
                  data: [65, 59, 80, 81, 56, 55, 40],
                  backgroundColor: "rgba(54, 162, 235, 0.2)",
                  borderColor: "rgba(54, 162, 235, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
            width={400}
            height={300}
          />
        </div>

        {/* Line Chart Example */}
        <div style={{ width: "400px" }}>
          <h2>Line Chart Example</h2>
          <ChartLine
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  label: "Sales",
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
              ],
            }}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
            width={400}
            height={300}
          />
        </div>

        {/* Pie Chart Example */}
        <div style={{ width: "400px" }}>
          <h2>Pie Chart Example</h2>
          <ChartPie
            data={{
              labels: ["Red", "Blue", "Yellow"],
              datasets: [
                {
                  label: "My First Dataset",
                  data: [300, 50, 100],
                  backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
                  hoverOffset: 4,
                },
              ],
            }}
            width={400}
            height={300}
          />
        </div>

        <Table
          columns={[
            {
              label: "Name",
              path: "name",
            },
            {
              label: "Age",
              path: "age",
            },
          ]}
          rows={[
            {
              address: "1424 Ridge Oak Drive",
              age: 29,
              avatar: "http://dummyimage.com/199x100.png/ff4444/ffffff",
              city: "Tutem",
              department: "Research and Development",
              email: "dyukhnin0@t.co",
              id: 1,
              lastName: "Yukhnin",
              name: "Devin",
              school: "Aichi Gakusen University",
            },
            {
              address: "378 Loftsgordon Drive",
              age: 44,
              avatar: "http://dummyimage.com/212x100.png/dddddd/000000",
              city: "Culacling",
              department: "Services",
              email: "kdomican1@archive.org",
              id: 2,
              lastName: "Domican",
              name: "Kale",
              school: "Medical Academy in Lodz",
            },
            {
              address: "385 Prairie Rose Junction",
              age: 19,
              avatar: "http://dummyimage.com/235x100.png/ff4444/ffffff",
              city: "Klirou",
              department: "Support",
              email: "hhackleton2@mozilla.com",
              id: 3,
              lastName: "Hackleton",
              name: "Harcourt",
              school: "Universidad Autónoma de Fresnillo",
            },
            {
              address: "883 Straubel Way",
              age: 21,
              avatar: "http://dummyimage.com/229x100.png/cc0000/ffffff",
              city: "Van Nuys",
              department: "Business Development",
              email: "krobard3@unblog.fr",
              id: 4,
              lastName: "Robard",
              name: "Keri",
              school: "Fachhochschule Hamburg",
            },
            {
              address: "72 Independence Street",
              age: 36,
              avatar: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
              city: "Sumberagung",
              department: "Business Development",
              email: "tjedrys4@eventbrite.com",
              id: 5,
              lastName: "Jedrys",
              name: "Trueman",
              school: "Illinois School of Professional Psychology - Meadows Campus",
            },
            {
              address: "2 Lakewood Gardens Trail",
              age: 22,
              avatar: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
              city: "Qandala",
              department: "Accounting",
              email: "ngelderd5@wisc.edu",
              id: 6,
              lastName: "Gelderd",
              name: "Nevsa",
              school: "Universiti Malaysia Sabah",
            },
          ]}
          title="Table"
        />
        <Table
          columns={[
            {
              label: "Name",
              path: "name",
            },
            {
              label: "Age",
              path: "age",
            },
          ]}
          onSelectionChange={() => {}}
          rows={[
            {
              address: "1424 Ridge Oak Drive",
              age: 29,
              avatar: "http://dummyimage.com/199x100.png/ff4444/ffffff",
              city: "Tutem",
              department: "Research and Development",
              email: "dyukhnin0@t.co",
              id: 1,
              lastName: "Yukhnin",
              name: "Devin",
              school: "Aichi Gakusen University",
            },
            {
              address: "378 Loftsgordon Drive",
              age: 44,
              avatar: "http://dummyimage.com/212x100.png/dddddd/000000",
              city: "Culacling",
              department: "Services",
              email: "kdomican1@archive.org",
              id: 2,
              lastName: "Domican",
              name: "Kale",
              school: "Medical Academy in Lodz",
            },
            {
              address: "385 Prairie Rose Junction",
              age: 19,
              avatar: "http://dummyimage.com/235x100.png/ff4444/ffffff",
              city: "Klirou",
              department: "Support",
              email: "hhackleton2@mozilla.com",
              id: 3,
              lastName: "Hackleton",
              name: "Harcourt",
              school: "Universidad Autónoma de Fresnillo",
            },
            {
              address: "883 Straubel Way",
              age: 21,
              avatar: "http://dummyimage.com/229x100.png/cc0000/ffffff",
              city: "Van Nuys",
              department: "Business Development",
              email: "krobard3@unblog.fr",
              id: 4,
              lastName: "Robard",
              name: "Keri",
              school: "Fachhochschule Hamburg",
            },
            {
              address: "72 Independence Street",
              age: 36,
              avatar: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
              city: "Sumberagung",
              department: "Business Development",
              email: "tjedrys4@eventbrite.com",
              id: 5,
              lastName: "Jedrys",
              name: "Trueman",
              school: "Illinois School of Professional Psychology - Meadows Campus",
            },
            {
              address: "2 Lakewood Gardens Trail",
              age: 22,
              avatar: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
              city: "Qandala",
              department: "Accounting",
              email: "ngelderd5@wisc.edu",
              id: 6,
              lastName: "Gelderd",
              name: "Nevsa",
              school: "Universiti Malaysia Sabah",
            },
          ]}
          title="Table"
        />
        <Table
          actions={[
            {
              callback: () => {},
              icon: "add",
              label: "Add",
            },
          ]}
          columns={[
            {
              label: "Name",
              path: "name",
            },
            {
              label: "Last Name",
              path: "lastName",
            },
            {
              label: "Age",
              path: "age",
            },
            {
              label: "Email",
              path: "email",
            },
            {
              label: "City",
              path: "city",
            },
            {
              label: "Address",
              path: "address",
            },
            {
              label: "Department",
              path: "department",
            },
            {
              label: "School",
              path: "school",
            },
            {
              label: "Avatar",
              path: "avatar",
            },
          ]}
          height={400}
          rows={[
            {
              address: "1424 Ridge Oak Drive",
              age: 29,
              avatar: "http://dummyimage.com/199x100.png/ff4444/ffffff",
              city: "Tutem",
              department: "Research and Development",
              email: "dyukhnin0@t.co",
              id: 1,
              lastName: "Yukhnin",
              name: "Devin",
              school: "Aichi Gakusen University",
            },
            {
              address: "378 Loftsgordon Drive",
              age: 44,
              avatar: "http://dummyimage.com/212x100.png/dddddd/000000",
              city: "Culacling",
              department: "Services",
              email: "kdomican1@archive.org",
              id: 2,
              lastName: "Domican",
              name: "Kale",
              school: "Medical Academy in Lodz",
            },
            {
              address: "385 Prairie Rose Junction",
              age: 19,
              avatar: "http://dummyimage.com/235x100.png/ff4444/ffffff",
              city: "Klirou",
              department: "Support",
              email: "hhackleton2@mozilla.com",
              id: 3,
              lastName: "Hackleton",
              name: "Harcourt",
              school: "Universidad Autónoma de Fresnillo",
            },
            {
              address: "883 Straubel Way",
              age: 21,
              avatar: "http://dummyimage.com/229x100.png/cc0000/ffffff",
              city: "Van Nuys",
              department: "Business Development",
              email: "krobard3@unblog.fr",
              id: 4,
              lastName: "Robard",
              name: "Keri",
              school: "Fachhochschule Hamburg",
            },
            {
              address: "72 Independence Street",
              age: 36,
              avatar: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
              city: "Sumberagung",
              department: "Business Development",
              email: "tjedrys4@eventbrite.com",
              id: 5,
              lastName: "Jedrys",
              name: "Trueman",
              school: "Illinois School of Professional Psychology - Meadows Campus",
            },
            {
              address: "2 Lakewood Gardens Trail",
              age: 22,
              avatar: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
              city: "Qandala",
              department: "Accounting",
              email: "ngelderd5@wisc.edu",
              id: 6,
              lastName: "Gelderd",
              name: "Nevsa",
              school: "Universiti Malaysia Sabah",
            },
          ]}
          rowsTotal={6}
          sticky
          tableLayout="auto"
          title="Try to scroll both ways"
        />
        <br></br>
        <Table
          actions={[
            {
              callback: () => {},
              icon: "add",
              label: "Add",
            },
            {
              callback: () => {},
              icon: "edit",
              label: "Edit",
              position: "primary",
            },
            {
              callback: () => {},
              icon: "close",
              label: "Delete",
              position: "primary",
            },
          ]}
          columns={[
            {
              label: "Name",
              path: "name",
            },
            {
              label: "Last Name",
              path: "lastName",
            },
            {
              label: "Age",
              path: "age",
            },
            {
              label: "Email",
              path: "email",
            },
            {
              label: "City",
              path: "city",
            },
            {
              label: "Address",
              path: "address",
            },
            {
              label: "Department",
              path: "department",
            },
            {
              label: "School",
              path: "school",
            },
            {
              label: "Avatar",
              path: "avatar",
            },
          ]}
          rows={[
            {
              address: "1424 Ridge Oak Drive",
              age: 29,
              avatar: "http://dummyimage.com/199x100.png/ff4444/ffffff",
              city: "Tutem",
              department: "Research and Development",
              email: "dyukhnin0@t.co",
              id: 1,
              lastName: "Yukhnin",
              name: "Devin",
              school: "Aichi Gakusen University",
            },
            {
              address: "378 Loftsgordon Drive",
              age: 44,
              avatar: "http://dummyimage.com/212x100.png/dddddd/000000",
              city: "Culacling",
              department: "Services",
              email: "kdomican1@archive.org",
              id: 2,
              lastName: "Domican",
              name: "Kale",
              school: "Medical Academy in Lodz",
            },
            {
              address: "385 Prairie Rose Junction",
              age: 19,
              avatar: "http://dummyimage.com/235x100.png/ff4444/ffffff",
              city: "Klirou",
              department: "Support",
              email: "hhackleton2@mozilla.com",
              id: 3,
              lastName: "Hackleton",
              name: "Harcourt",
              school: "Universidad Autónoma de Fresnillo",
            },
            {
              address: "883 Straubel Way",
              age: 21,
              avatar: "http://dummyimage.com/229x100.png/cc0000/ffffff",
              city: "Van Nuys",
              department: "Business Development",
              email: "krobard3@unblog.fr",
              id: 4,
              lastName: "Robard",
              name: "Keri",
              school: "Fachhochschule Hamburg",
            },
            {
              address: "72 Independence Street",
              age: 36,
              avatar: "http://dummyimage.com/249x100.png/5fa2dd/ffffff",
              city: "Sumberagung",
              department: "Business Development",
              email: "tjedrys4@eventbrite.com",
              id: 5,
              lastName: "Jedrys",
              name: "Trueman",
              school: "Illinois School of Professional Psychology - Meadows Campus",
            },
            {
              address: "2 Lakewood Gardens Trail",
              age: 22,
              avatar: "http://dummyimage.com/136x100.png/5fa2dd/ffffff",
              city: "Qandala",
              department: "Accounting",
              email: "ngelderd5@wisc.edu",
              id: 6,
              lastName: "Gelderd",
              name: "Nevsa",
              school: "Universiti Malaysia Sabah",
            },
          ]}
          rowsTotal={6}
          stickySelection
          tableLayout="auto"
          title="Try to scroll horizontally"
        />
        <Card
          collapsible="Discover mosaics from all around the globe!"
          subtitle="UK: /mə(ʊ)ˈzeɪɪk/"
          title="Mosaic">
          A mosaic is an artistic picture or design made out of any materials assembled together.
        </Card>

        <Card icon={Icons.apps} loading subtitle="UK: /mə(ʊ)ˈzeɪɪk/" title="Mosaic">
          A mosaic is an artistic picture or design made out of any materials assembled together.
        </Card>
        <Card localized subtitle="locale.subtitle" title="locale.title">
          A mosaic is an artistic picture or design made out of any materials assembled together.
        </Card>
        <Card
          actions={[
            <Button
              key="gallery"
              icon={{ name: Icons.open_new }}
              label="Gallery"
              onClick={() => {}}
            />,
          ]}
          collapsible="Discover mosaics from all around the globe!"
          subtitle="UK: /mə(ʊ)ˈzeɪɪk/"
          title="Mosaic">
          A mosaic is an artistic picture or design made out of any materials assembled together.
        </Card>
        <AppBar
          actions={[
            {
              icon: "settings",
              onClick: () => {},
              tooltip: "Settings",
            },
          ]}
          menu={{
            icon: "home",
            onClick: () => {},
            tooltip: "Home",
          }}>
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}>
            <Typography>Home </Typography>
            <Typography>Section</Typography>
            <Typography>Detail</Typography>
          </div>
        </AppBar>
        <Menu
          items={[
            {
              label: "Item",
              value: "Value",
            },
          ]}
          label="Label"
          onItemClick={() => {}}
          icon={Icons.menu}
          type="icon"
        />
        <Typography loading>Text example</Typography>
        <Menu
          items={[
            {
              label: "Item1",
              onClick: () => {},
              value: "Value",
            },
            {
              label: "Item2",
              value: "Value",
            },
          ]}
          label="Label"
          onItemClick={() => {}}
        />
        <Modal closable confirm={{ action: () => {}, label: "Confirm" }} title="Modal">
          Modal Content
        </Modal>
        <Modal
          cancel={{ action: () => {}, label: "Cancel", variant: "outlined" }}
          closable
          confirm={{ action: () => {}, label: "Confirm" }}
          title="Modal">
          Modal Content
        </Modal>
        <Modal
          cancel={{ action: () => {}, label: "locale.cancel", variant: "outlined" }}
          confirm={{ action: () => {}, label: "locale.confirm" }}
          localized
          title="locale.title">
          Modal Content
        </Modal>
        <Modal closable size="sm" title="Modal">
          Modal Content
        </Modal>
        <Modal closable size="lg" title="Modal">
          Modal Content
        </Modal>
        <Modal closable size="xl" title="Modal">
          Modal Content
        </Modal>

        <Button
          label="Primary Button"
          color="error"
          onClick={() => console.log("Primary button clicked")}
        />
        <Button
          label="Success Button"
          color="success"
          onClick={() => console.log("Success button clicked")}
        />
        <Button
          disabled
          label="Disabled Button"
          color="secondary"
          onClick={() => console.log("Disabled button clicked")}
        />
        <Button
          elevated
          label="Elevated Button"
          color="info"
          onClick={() => console.log("Elevated button clicked")}
        />
        <Button
          label="Localized Button"
          color="warning"
          onClick={() => console.log("Localized button clicked")}
        />
        <Button
          label="Styled Button"
          color="error"
          onClick={() => console.log("Styled button clicked")}
          style={{ backgroundColor: "blue", color: "white", fontSize: "22px" }}
        />
        <Button
          label="Outlined Button"
          color="warning"
          variant="outlined"
          onClick={() => console.log("Outlined button clicked")}
        />
        <Button
          icon={{ name: Icons.send, position: "right" }}
          label="Button"
          color="success"
          onClick={() => {}}
        />
        <Button
          disabled
          label="Button"
          color="primary"
          onClick={() => {}}
          style={{ backgroundColor: "green", color: "red" }}
        />
        <Button
          disabled
          icon={{ name: Icons.refresh, rotate: true, position: "right" }}
          label="Loading"
          color="secondary"
          onClick={() => {}}
          style={{ backgroundColor: "green", color: "red", width: "12px" }}
        />

        {/* IconButton Components */}
        <IconButton icon={Icons.add} onClick={() => console.log("Primary button clicked")} />
        <IconButton
          badge={{ color: "secondary", value: "8" }}
          icon={Icons.add}
          onClick={() => console.log("Success button clicked")}
        />
        <IconButton
          disabled
          icon={Icons.add}
          onClick={() => console.log("Disabled button clicked")}
        />
        <IconButton icon={Icons.add} onClick={() => console.log("Elevated button clicked")} />
        <IconButton icon={Icons.add} onClick={() => console.log("Localized button clicked")} />
        <IconButton
          icon={Icons.add}
          onClick={() => console.log("Styled button clicked")}
          style={{ backgroundColor: "blue", color: "white", fontSize: "22px" }}
        />
        <IconButton
          icon={Icons.add}
          onClick={() => console.log("Outlined button clicked")}
          variant="outlined"
          tooltip="Hello"
        />
        <IconButton
          icon={Icons.send}
          position="right"
          onClick={() => console.log("Button clicked")}
        />

        {/* DateTimePicker */}
        <DateTimePicker label="Date Time" />
        <DateTimePicker label="Date Time" timeView="hrs" />
        <DateTimePicker label="Date Time" timeView="sec" />
        <DateTimePicker
          label="Date Time"
          mobileView
          timeView="sec"
          timeZone="utc+8"
          value="2023-10-29T00:00:00.000+02:00"
        />
        <DateTimePicker label="Date Time" ampm />
        <DateTimePicker label="locale.dateTime" localized />
        <DateTimePicker label="Date" type="date" />
        <DateTimePicker label="Date Time" type="time" />

        {/* InputText */}
        <InputText label="Label" onChange={() => {}} value="Value" />
        <InputText
          adornment={{ icon: Icons.close }}
          label="Label"
          onChange={() => {}}
          value="Value"
        />
        <InputText
          adornment={{ icon: Icons.close, onClick: () => {} }}
          label="Label"
          onChange={() => {}}
          value="Value"
        />
        <InputText disabled label="Label" onChange={() => {}} value="Value" />
        <InputText
          label="locale.inputText"
          localized
          onChange={() => {}}
          placeholder="locale.placeholder"
          value="Value"
        />
        <InputText
          label="Label"
          multiline={{ rows: 3, rowsMax: 5 }}
          onChange={() => {}}
          value="Value"
        />
        <InputText label="Label" onChange={() => {}} placeholder="Enter value..." />
        <InputText label="Label" onChange={() => {}} required value="Value" />
        <InputText label="Label" onChange={() => {}} size="small" value="Value" />
        <InputText
          label="Label"
          onChange={() => {}}
          style={{ color: "red", fontSize: "large", fontWeight: "bold", textAlign: "center" }}
          value="Value"
        />
        <InputText label="Label" onChange={() => {}} value="Value" variant="filled" />
        <InputText label="Label" onChange={() => {}} value="Value" variant="standard" />

        {/* InputNumber */}
        <InputNumber label="Label" maxValue={100} minValue={5} onChange={() => {}} value={5} />
        <InputNumber
          adornment={{ icon: Icons.close }}
          label="Label"
          maxValue={100}
          minValue={5}
          onChange={() => {}}
          value={5}
        />
        <InputNumber
          adornment={{ icon: Icons.close, onClick: () => {} }}
          label="Label"
          maxValue={100}
          minValue={5}
          onChange={() => {}}
          value={5}
        />
        <InputNumber label="Label" maxValue={100} minValue={5} onChange={() => {}} value={5.275} />
        <InputNumber
          disabled
          label="Label"
          maxValue={100}
          minValue={5}
          onChange={() => {}}
          value={5}
        />
        <InputNumber
          label="locale.inputNumber"
          localized
          maxValue={100}
          minValue={5}
          onChange={() => {}}
          placeholder="locale.placeholder"
          value={5}
        />
        <InputNumber label="Label" maxValue={1000} minValue={20} onChange={() => {}} value={5} />
        <InputNumber label="Label" onChange={() => {}} placeholder="Enter value..." />
        <InputNumber
          label="Label"
          maxValue={100}
          minValue={5}
          onChange={() => {}}
          required
          value={5}
        />
        <InputNumber
          label="Label"
          maxValue={100}
          minValue={5}
          onChange={() => {}}
          size="small"
          value={5}
        />
        <InputNumber
          label="Label"
          maxValue={100}
          minValue={5}
          onChange={() => {}}
          style={{ color: "red", fontSize: "large", fontWeight: "bold", textAlign: "center" }}
          value={5}
        />
        <InputNumber
          label="Label"
          maxValue={100}
          minValue={5}
          onChange={() => {}}
          value={5}
          variant="filled"
        />
        <InputNumber
          label="Label"
          maxValue={100}
          minValue={5}
          onChange={() => {}}
          value={5}
          variant="standard"
        />

        {/* Modal */}

        {/* Progress */}
        <Progress type="circular" />
        <Progress color="error" type="circular" />
        <Progress type="circular" value={50} variant="determinate" />
        <Progress type="circular" value={-999} />
        <Progress type="circular" value={50} variant="determinate" withLabel />
        <Progress type="linear" />
        <Progress color="error" type="linear" />
        <Progress type="linear" value={50} variant="determinate" />
        <Progress type="linear" value={999} />
        <Progress type="linear" value={50} variant="determinate" withLabel />

        {/* AppBar */}
        <AppBar
          actions={[{ icon: Icons.settings, onClick: () => {}, tooltip: "Settings" }]}
          menu={{ icon: Icons.home, onClick: () => {}, tooltip: "Home" }}
          title="AppBar"
        />
        <AppBar
          actions={[
            {
              badge: { color: "error", value: "5" },
              icon: Icons.notifications,
              onClick: () => {},
              tooltip: "Notifications",
            },
            { icon: Icons.mail, onClick: () => {}, tooltip: "Mail" },
            { icon: Icons.settings, onClick: () => {}, tooltip: "Settings" },
          ]}
          menu={{ icon: Icons.home, onClick: () => {}, tooltip: "Home" }}
          title="AppBar"
        />
        <AppBar title="Empty" />
        <AppBar
          actions={[{ icon: Icons.settings, onClick: () => {}, tooltip: "Settings" }]}
          menu={{ icon: Icons.home, onClick: () => {}, tooltip: "Home" }}>
          <div style={{ alignItems: "center", display: "flex" }}>
            <Typography>Home</Typography>
            {/* <Memo name="right" /> */}
            <Typography>Section</Typography>
            {/* <Memo name="right" /> */}
            <Typography>Detail</Typography>
          </div>
        </AppBar>
        <AppBar
          actions={[{ icon: Icons.settings, onClick: () => {}, tooltip: "Settings" }]}
          menu={{ icon: Icons.home, onClick: () => {}, tooltip: "Home" }}
          title="AppBar"
          user={{
            items: [
              { label: "View Details", onClick: () => {}, value: "details" },
              { label: "Logout", onClick: () => {}, value: "logout" },
            ],
            label: "github",
          }}
        />
        <AppBar
          actions={[{ icon: Icons.settings, onClick: () => {}, tooltip: "Settings" }]}
          menu={{ icon: Icons.home, onClick: () => {}, tooltip: "Home" }}
          title="AppBar"
          user={{
            items: [
              { label: "View Details", onClick: () => {}, value: "details" },
              { label: "Logout", onClick: () => {}, value: "logout" },
            ],
            label: "m",
            type: "icon",
          }}
        />
        <AppBar
          actions={[{ icon: Icons.settings, onClick: () => {}, tooltip: "Settings" }]}
          menu={{ icon: Icons.home, onClick: () => {}, tooltip: "Home" }}
          title="AppBar"
          userMenu={[{ label: "Logout", onClick: () => {} }]}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
