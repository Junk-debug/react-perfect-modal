"use client";

/* eslint-disable react/jsx-pascal-case */

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { productColumns, productRows } from "@/data/products";
import { Icons } from "@/components/icons";
import DashedPlaceholder from "@/components/ui/dashed-placeholder";
import { useState } from "react";
import EditProductModal from "@/app/03-approach/product-modal/edit-product-modal";
import DeleteProductModal from "@/app/03-approach/product-modal/delete-product-modal";
import Modal from "./modal";

export default function SecondApproachPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<"edit" | "delete" | null>(null);

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {modalType === "edit" && <EditProductModal />}
        {modalType === "delete" && <DeleteProductModal />}
      </Modal>
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {productColumns.map((column) => (
                  <TableHead key={column.name}>{column.name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {productRows.map((product) => (
                <TableRow key={product.name}>
                  <TableCell>
                    <DashedPlaceholder />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.inventory}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setIsOpen(true);
                          setModalType("edit");
                        }}
                      >
                        <Icons.filePen className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setIsOpen(true);
                          setModalType("delete");
                        }}
                      >
                        <Icons.trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
