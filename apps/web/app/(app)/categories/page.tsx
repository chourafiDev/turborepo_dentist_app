import AddCategory from "@/components/categories/AddCategory";
import ListCategories from "@/components/categories/ListCategories";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full h-full md:p-6 p-3">
      <Card>
        <CardHeader className="border-0 pb-0 flex justify-between items-center">
          <CardTitle>Categories Summary</CardTitle>

          <AddCategory />
        </CardHeader>

        <CardContent>
          <ListCategories />
        </CardContent>
      </Card>
    </div>
  );
}
