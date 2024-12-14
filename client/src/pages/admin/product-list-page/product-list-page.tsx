import { useGetAllProductsQuery } from "@/services/products/prod-queries";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function ProductListPage() {
  const { data } = useGetAllProductsQuery();

  return (
    <section>
      <h1 className="text-3xl font-bold">Products List</h1>
      <DataTable columns={columns} data={data ?? []} filterName="name" />
    </section>
  );
}
