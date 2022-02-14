export function renderLoading() {
  return (
    <div className="shadow rounded-md m-5 p-10 max-w-xlg w-full mx-auto">
      <div data-testid="loading" className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-52 w-52"></div>
        <div className="flex-1 space-y-6 mx-11 py-1">
          <div className="h-5 w-52 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid mt-10 grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
