import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "~/components/ui/table";
import { api } from "~/utils/api";

export default function Page() {
  const pricing_true = api.pricing.true.useQuery();
  const pricing_studio7 = api.pricing.studio7.useQuery();
  const pricing_bananait = api.pricing.bananait.useQuery();
  const pricing_csc = api.pricing.csc.useQuery();
  const pricing_istudiobyspvi = api.pricing.istudiobyspvi.useQuery();
  const pricing_istudiobycopperwired =
    api.pricing.istudiobycopperwired.useQuery();
  const pricing_jaymart = api.pricing.jaymart.useQuery();
  const pricing_tg = api.pricing.tg.useQuery();

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="max-w-full overflow-auto rounded-lg border">
        <Table className="min-w-[500px]">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Shop</TableHead>
              <TableHead>iPhone 15 Pro Max</TableHead>
              <TableHead>iPhone 15 Pro</TableHead>
              <TableHead>iPhone 15 Plus</TableHead>
              <TableHead>iPhone 15</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold text-red-800 dark:text-red-200">
                True
              </TableCell>
              <TableCell>
                {pricing_true.data
                  ? pricing_true.data.iPhone15ProMax
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_true.data
                  ? pricing_true.data.iPhone15Pro
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_true.data
                  ? pricing_true.data.iPhone15Plus
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_true.data
                  ? pricing_true.data.iPhone15
                  : "Loading tRPC query"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-red-800 dark:text-red-200">
                Studio7
              </TableCell>
              <TableCell>
                {pricing_studio7.data
                  ? pricing_studio7.data.iPhone15ProMax
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_studio7.data
                  ? pricing_studio7.data.iPhone15Pro
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_studio7.data
                  ? pricing_studio7.data.iPhone15Plus
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_studio7.data
                  ? pricing_studio7.data.iPhone15
                  : "Loading tRPC query"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-red-800 dark:text-red-200">
                BananaIT
              </TableCell>
              <TableCell>
                {pricing_bananait.data
                  ? pricing_bananait.data.iPhone15ProMax
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_bananait.data
                  ? pricing_bananait.data.iPhone15Pro
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_bananait.data
                  ? pricing_bananait.data.iPhone15Plus
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_bananait.data
                  ? pricing_bananait.data.iPhone15
                  : "Loading tRPC query"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-red-800 dark:text-red-200">
                CSC
              </TableCell>
              <TableCell>
                {pricing_csc.data
                  ? pricing_csc.data.iPhone15ProMax
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_csc.data
                  ? pricing_csc.data.iPhone15Pro
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_csc.data
                  ? pricing_csc.data.iPhone15Plus
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_csc.data
                  ? pricing_csc.data.iPhone15
                  : "Loading tRPC query"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-lime-800 dark:text-lime-200">
                iStudio by SPVI
              </TableCell>
              <TableCell>
                {pricing_istudiobyspvi.data
                  ? pricing_istudiobyspvi.data.iPhone15ProMax
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_istudiobyspvi.data
                  ? pricing_istudiobyspvi.data.iPhone15Pro
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_istudiobyspvi.data
                  ? pricing_istudiobyspvi.data.iPhone15Plus
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_istudiobyspvi.data
                  ? pricing_istudiobyspvi.data.iPhone15
                  : "Loading tRPC query"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-lime-800 dark:text-lime-200">
                iStudio by copperwired
              </TableCell>
              <TableCell>
                {pricing_istudiobycopperwired.data
                  ? pricing_istudiobycopperwired.data.iPhone15ProMax
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_istudiobycopperwired.data
                  ? pricing_istudiobycopperwired.data.iPhone15Pro
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_istudiobycopperwired.data
                  ? pricing_istudiobycopperwired.data.iPhone15Plus
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_istudiobycopperwired.data
                  ? pricing_istudiobycopperwired.data.iPhone15
                  : "Loading tRPC query"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-lime-800 dark:text-lime-200">
                Jaymart
              </TableCell>
              <TableCell>
                {pricing_jaymart.data
                  ? pricing_jaymart.data.iPhone15ProMax
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_jaymart.data
                  ? pricing_jaymart.data.iPhone15Pro
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_jaymart.data
                  ? pricing_jaymart.data.iPhone15Plus
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_jaymart.data
                  ? pricing_jaymart.data.iPhone15
                  : "Loading tRPC query"}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold text-lime-800 dark:text-lime-200">
                TG
              </TableCell>
              <TableCell>
                {pricing_tg.data
                  ? pricing_tg.data.iPhone15ProMax
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_tg.data
                  ? pricing_tg.data.iPhone15Pro
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_tg.data
                  ? pricing_tg.data.iPhone15Plus
                  : "Loading tRPC query"}
              </TableCell>
              <TableCell>
                {pricing_tg.data
                  ? pricing_tg.data.iPhone15
                  : "Loading tRPC query"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
