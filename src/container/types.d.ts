type ValueOf<T> = T[number];

type TypeTheme = "light" | "dark";

type TypeLang = "en" | "ar";

type TypeDefaultConfig = {
  theme: TypeTheme;
  lang: TypeLang;
};

type TypeStatus = "active" | "inactive";

type TypeUser = {
  name: string;
  email: string;
  status?: TypeStatus;
  isActive?: boolean;
  avatar: string | null;
};

enum EnumModalTypes {
  success = "success",
  error = "error",
  warning = "warning",
  info = "info",
  edit = "edit",
  add = "add",
  view = "view",
  delete = "delete",
  filter = "filter",
  status = "status",
  confirmation = "confirmation",
  layout = "layout",
}

type TypePaggination = {
  page: number;
  take: number;
  itemsPerPage: number;
  total: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

type TypeResponse<T> = {
  data: T;
  meta: TypePaggination;
};

type TypeResponseError = Partial<Error> & {
  message: string;
};

type TypeQueryParams = {
  page?: string;
  take?: string;
  search?: string;
};

enum EnumMetaParams {
  search = "search",
  take = "take",
  page = "page",
}
