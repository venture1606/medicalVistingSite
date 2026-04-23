import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCT_DETAIL_CONTENT } from "@/lib/constants";
import type { CompositionRow } from "@/lib/types";

interface ProductTabsProps {
  composition: CompositionRow[];
  clinicalTrials: string;
  storageHandling: string;
}

export function ProductTabs({
  composition,
  clinicalTrials,
  storageHandling,
}: ProductTabsProps) {
  return (
    <Tabs defaultValue="composition" className="mt-12">
      <TabsList className="h-auto w-full justify-start gap-8 rounded-none border-b border-slate-200 bg-transparent p-0">
        <TabsTrigger
          value="composition"
          className="relative h-11 rounded-none border-b-2 border-transparent bg-transparent px-2 pb-3 pt-2 text-base font-medium text-slate-500 transition-none hover:text-slate-700 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
        >
          {PRODUCT_DETAIL_CONTENT.compositionTab}
        </TabsTrigger>
        <TabsTrigger
          value="trials"
          className="relative h-11 rounded-none border-b-2 border-transparent bg-transparent px-2 pb-3 pt-2 text-base font-medium text-slate-500 transition-none hover:text-slate-700 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
        >
          {PRODUCT_DETAIL_CONTENT.trialsTab}
        </TabsTrigger>
        <TabsTrigger
          value="storage"
          className="relative h-11 rounded-none border-b-2 border-transparent bg-transparent px-2 pb-3 pt-2 text-base font-medium text-slate-500 transition-none hover:text-slate-700 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
        >
          {PRODUCT_DETAIL_CONTENT.storageTab}
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="composition"
        className="mt-6 rounded-md border border-slate-200 bg-white p-8 shadow-sm"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-base">
            <thead>
              <tr className="border-b border-slate-100 text-slate-900">
                <th className="pb-4 text-left font-bold">
                  {PRODUCT_DETAIL_CONTENT.ingredientHeader}
                </th>
                <th className="pb-4 text-right font-bold">
                  {PRODUCT_DETAIL_CONTENT.quantityHeader}
                </th>
                <th className="pb-4 text-right font-bold">
                  {PRODUCT_DETAIL_CONTENT.dvHeader}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {composition.map((row) => (
                <tr
                  key={row.ingredient}
                  className="text-slate-600 transition-colors hover:bg-slate-50/50"
                >
                  <td className="py-5 text-left">{row.ingredient}</td>
                  <td className="py-5 text-right tabular-nums">{row.quantity}</td>
                  <td className="py-5 text-right tabular-nums">{row.dv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm italic text-slate-400">
          {PRODUCT_DETAIL_CONTENT.dvFootnote}
        </p>
      </TabsContent>
      <TabsContent
        value="trials"
        className="mt-6 rounded-md border border-slate-200 bg-white p-8 text-slate-600 shadow-sm"
      >
        <div className="leading-relaxed">
          {clinicalTrials}
        </div>
      </TabsContent>
      <TabsContent
        value="storage"
        className="mt-6 rounded-md border border-slate-200 bg-white p-8 text-slate-600 shadow-sm"
      >
        <div className="leading-relaxed">
          {storageHandling}
        </div>
      </TabsContent>
    </Tabs>
  );
}
