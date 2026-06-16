import { Button, Modal, Switch, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { categoryDto } from "../../utlils/formatters/categoriesDTO";

const AddCategories = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { categoryName: categoryName, categoryImage: categoryImage };
      
  const formatedData = categoryDto.send(data)

    setCategories([...categories, data]);
    setCategoryName("");
    setCategoryImage(null);
    close();
  };

  const rows = categories?.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{element.categoryName}</Table.Td>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>
        <Switch defaultChecked />
      </Table.Td>

      <Table.Td>
        <Button variant="outline" color="blue">
          Edit
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <main>
      <section className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-2xl">Categories</h1>
        <div>
          <Button variant="filled" onClick={open}>
            Add Category
          </Button>
        </div>
      </section>

      <section>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>S.n.</Table.Th>
              <Table.Th>Title</Table.Th>
              <Table.Th>No of Products</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </section>

      <Modal opened={opened} onClose={close} centered title="Add Category">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-5 border border-gray-100"
        >
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              onChange={(e) => setCategoryName(e.target.value)}
              value={categoryName}
              type="text"
              name="categoryName"
              placeholder="Enter category name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-700">
              Category Image
            </label>
            <input
              type="file"
              name="categoryImage"
              required
              className="w-full text-sm text-gray-600 border border-gray-300 rounded-xl p-2 cursor-pointer
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:bg-blue-50 file:text-blue-600
              file:font-medium hover:file:bg-blue-100"
              onChange={(e) => setCategoryImage(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Add Category
          </button>
        </form>
      </Modal>
    </main>
  );
};

export default AddCategories;