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
    <Tabs defaultValue="composition" className="mt-8 sm:mt-12">
      <TabsList className="scrollbar-hide flex h-auto w-full flex-nowrap justify-start gap-4 overflow-x-auto rounded-none border-b border-slate-200 bg-transparent p-0 sm:gap-8 [&::-webkit-scrollbar]:hidden">
        <TabsTrigger
          value="composition"
          className="relative h-11 shrink-0 rounded-none border-b-2 border-transparent bg-transparent px-1 pb-3 pt-2 text-sm font-medium text-slate-500 transition-none hover:text-slate-700 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none sm:px-2 sm:text-base"
        >
          {PRODUCT_DETAIL_CONTENT.compositionTab}
        </TabsTrigger>
        <TabsTrigger
          value="trials"
          className="relative h-11 shrink-0 rounded-none border-b-2 border-transparent bg-transparent px-1 pb-3 pt-2 text-sm font-medium text-slate-500 transition-none hover:text-slate-700 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none sm:px-2 sm:text-base"
        >
          {PRODUCT_DETAIL_CONTENT.trialsTab}
        </TabsTrigger>
        <TabsTrigger
          value="storage"
          className="relative h-11 shrink-0 rounded-none border-b-2 border-transparent bg-transparent px-1 pb-3 pt-2 text-sm font-medium text-slate-500 transition-none hover:text-slate-700 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none sm:px-2 sm:text-base"
        >
          {PRODUCT_DETAIL_CONTENT.storageTab}
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="composition"
        className="mt-6 rounded-md border border-slate-200 bg-white p-4 shadow-sm sm:p-8"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b border-slate-100 text-slate-900">
                <th className="pb-3 text-left font-bold sm:pb-4">
                  {PRODUCT_DETAIL_CONTENT.ingredientHeader}
                </th>
                <th className="pb-3 text-right font-bold sm:pb-4">
                  {PRODUCT_DETAIL_CONTENT.quantityHeader}
                </th>
                <th className="pb-3 text-right font-bold sm:pb-4">
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
                  <td className="py-4 text-left sm:py-5">{row.ingredient}</td>
                  <td className="py-4 text-right tabular-nums sm:py-5">{row.quantity}</td>
                  <td className="py-4 text-right tabular-nums sm:py-5">{row.dv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs italic text-slate-400 sm:mt-6 sm:text-sm">
          {PRODUCT_DETAIL_CONTENT.dvFootnote}
        </p>
      </TabsContent>
      <TabsContent
        value="trials"
        className="mt-6 rounded-md border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm sm:p-8 sm:text-base"
      >
        <div className="leading-relaxed">
          {clinicalTrials}
        </div>
      </TabsContent>
      <TabsContent
        value="storage"
        className="mt-6 rounded-md border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm sm:p-8 sm:text-base"
      >
        <div className="leading-relaxed">
          {storageHandling}
        </div>
      </TabsContent>
    </Tabs>
  );
}
