import { Button, Modal, Switch, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

const AddCategories = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log("FormData Entries: ", e);
    const data = {
      categoryName: formData.get("categoryName"),
      categoryImage: formData.get("categoryImage"),
    };

    console.log("Form Data:", data);
    console.log("Image Name:", data.categoryImage.name);
  };

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

          <Table.Tbody>
            <Table.Tr>
              <Table.Td>1</Table.Td>
              <Table.Td>Head Phones</Table.Td>
              <Table.Td>10</Table.Td>
              <Table.Td>
                <Switch defaultChecked />
              </Table.Td>
              <Table.Td>
                <Button variant="outline" color="blue">
                  Edit
                </Button>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
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