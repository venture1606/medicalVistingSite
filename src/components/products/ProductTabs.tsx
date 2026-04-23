import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { PRODUCT_DETAIL_CONTENT } from "@/lib/constants";
import type { CompositionRow } from "@/lib/types";

interface ProductTabsProps {
  composition: CompositionRow[];
  clinicalTrials: string;
  storageHandling: string;
}

export function ProductTabs({ composition, clinicalTrials, storageHandling }: ProductTabsProps) {
  return (
    <Tabs defaultValue="composition" className="mt-10">
      <TabsList className="h-auto w-full justify-start rounded-none border-b border-border bg-transparent p-0">
        <TabsTrigger value="composition" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
          {PRODUCT_DETAIL_CONTENT.compositionTab}
        </TabsTrigger>
        <TabsTrigger value="trials" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
          {PRODUCT_DETAIL_CONTENT.trialsTab}
        </TabsTrigger>
        <TabsTrigger value="storage" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary">
          {PRODUCT_DETAIL_CONTENT.storageTab}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="composition" className="rounded-lg border border-border bg-white p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-base">
            <thead>
              <tr className="border-b border-border text-text-primary">
                <th className="pb-3 font-semibold">
                  {PRODUCT_DETAIL_CONTENT.ingredientHeader}
                </th>
                <th className="pb-3 font-semibold">
                  {PRODUCT_DETAIL_CONTENT.quantityHeader}
                </th>
                <th className="pb-3 font-semibold">
                  {PRODUCT_DETAIL_CONTENT.dvHeader}
                </th>
              </tr>
            </thead>
            <tbody>
              {composition.map((row) => (
                <tr key={row.ingredient} className="border-b border-border text-text-secondary last:border-b-0">
                  <td className="py-4">{row.ingredient}</td>
                  <td className="py-4">{row.quantity}</td>
                  <td className="py-4">{row.dv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-base italic text-text-secondary">{PRODUCT_DETAIL_CONTENT.dvFootnote}</p>
      </TabsContent>
      <TabsContent value="trials" className="rounded-lg border border-border bg-white p-6 text-text-secondary">
        {clinicalTrials}
      </TabsContent>
      <TabsContent value="storage" className="rounded-lg border border-border bg-white p-6 text-text-secondary">
        {storageHandling}
      </TabsContent>
    </Tabs>
  );
}
