"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaSheetPlastic } from "react-icons/fa6";
import { BsRobot } from "react-icons/bs";
import { ReportNumberForm } from "@components/reportNumberForm";
import { selectReport } from "@redux/slices/report.slice";
import { PageSkeleton } from "@components/pageSkeleton";
import { Suspense } from "react";

export interface YourPolicyInformationPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function YourPolicyInformationPage({
  searchParams,
}: YourPolicyInformationPageProps) {
  const { isFetched, isLoading, user, policy } = useSelector(selectReport);

  return (
    <Suspense fallback={<PageSkeleton />}>
      <main className="p-10 flex-1 flex flex-col justify-center w-full items-center">
        {!isFetched && <ReportNumberForm />}
        {isFetched &&
          (isLoading ? (
            <div role="status" className="w-full max-w-md animate-pulse">
              <div className="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-48 mb-4"></div>
              <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 mb-2.5"></div>
              <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[330px] mb-2.5"></div>
              <div className="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-48 mb-4"></div>
              <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 mb-2.5"></div>
              <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[330px] mb-2.5"></div>
              <div className="h-2.5 bg-slate-200 rounded-full dark:bg-slate-700 w-48 mb-4"></div>
              <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 mb-2.5"></div>
              <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[330px] mb-2.5"></div>
              <div className="h-2 bg-slate-200 rounded-full dark:bg-slate-700 max-w-[360px]"></div>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <form className="bg-slate-100 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-950 rounded-2xl p-8 shadow-md shadow-slate-800 w-full max-w-4xl flex flex-col">
              <div className="flex felx-col justify-center items-center mb-6">
                <div className="flex flex-row flex-nowrap justify-end items-center w-2/4">
                  <label
                    className="block text-slate-700 dark:text-slate-50 font-bold pr-4 text-right"
                    htmlFor="inline-full-name"
                  >
                    Aseguradora:
                  </label>
                </div>
                <div className="w-full flex justify-center items-center">
                  <input
                    disabled
                    className="w-full py-2 px-4 text-slate-700 dark:text-slate-50 leading-tight dark:bg-slate-900 rounded-lg"
                    type="text"
                    control-id={`ControlID-1`}
                    value={policy.insuranceCompany}
                  />
                </div>
              </div>
              <div className="flex felx-col justify-center items-center mb-6">
                <div className="flex flex-row flex-nowrap justify-end items-center w-2/4">
                  <label
                    className="block text-slate-700 dark:text-slate-50 font-bold pr-4 text-right"
                    htmlFor="inline-full-name"
                  >
                    Número de póliza:
                  </label>
                </div>
                <div className="w-full flex justify-center items-center">
                  <input
                    disabled
                    className="w-full py-2 px-4 text-slate-700 dark:text-slate-50 leading-tight dark:bg-slate-900 rounded-lg"
                    type="text"
                    control-id={`ControlID-2`}
                    value={policy.insuranceCompanyNumber}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1 p-2">
                <div className="flex flex-row items-start justify-end">
                  <span className="md:mt-0.5 block text-slate-700 dark:text-slate-50 font-bold pr-4 text-right">
                    Cobertura:
                  </span>
                </div>
                <div className="flex flex-col col-span-2">
                  {policy.coverages.map(({ name }, index) => (
                    <div
                      key={`coverage-${name}`}
                      className="flex flex-row flex-nowrap justify-center items-center gap-2"
                    >
                      <span className="flex-1 w-max text-slate-700 dark:text-slate-50">
                        {`Cobertura ${
                          ["A", "B", "C", "D", "E", "F", "G", "H", "I"][index]
                        } - ${name}`}
                      </span>

                      <div className="flex flex-row justify-center items-center gap-1">
                        <Link
                          href="/"
                          className="w-7 h-7 text-indigo-400 hover:text-indigo-500 transition-all ease-in-out duration-150 flex justify-center items-center text-lg hover:text-2xl"
                        >
                          <FaSheetPlastic className="" />
                        </Link>

                        <Link
                          href="/"
                          className="w-7 h-7 text-indigo-400 hover:text-indigo-500 transition-all ease-in-out duration-150 flex justify-center items-center text-lg hover:text-2xl"
                        >
                          <BsRobot className="" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1 p-2">
                <div className="flex flex-row flex-nowrap items-start justify-end">
                  <span className="block text-slate-700 dark:text-slate-50 font-bold pr-4 text-right">
                    Deducible:
                  </span>
                </div>
                <div className="flex flex-col col-span-2">
                  {policy.coverages.map(({ name, price }, index) => (
                    <span
                      key={`coverage-${name}-price`}
                      className="text-slate-700 dark:text-slate-50"
                    >
                      {`${
                        ["A", "B", "C", "D", "E", "F", "G", "H", "I"][index]
                      } - $${price}`}
                    </span>
                  ))}
                </div>
              </div>
            </form>
          ))}
      </main>
    </Suspense>
  );
}
