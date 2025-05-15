import { Link } from "react-router";

function PageNotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-3xl">
      <span>
        <b className="text-rose-600">خطای 404 </b> صفحه مورد نظر یافت نشد
      </span>
      <Link
        className="rounded-3xl bg-btnBlue p-4 text-white transition-colors duration-200 hover:bg-blue-500"
        to="/"
      >
        برگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default PageNotFound;
