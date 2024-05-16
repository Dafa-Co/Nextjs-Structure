export const themeCookiesKey = "theme";

export const langCookiesKey = "lang";

export const debounceTimeOut = 300;

export const modalTypes: Record<EnumModalTypes, EnumModalTypes> = {
  success: "success" as EnumModalTypes.success,
  error: "error" as EnumModalTypes.error,
  warning: "warning" as EnumModalTypes.warning,
  info: "info" as EnumModalTypes.info,
  edit: "edit" as EnumModalTypes.edit,
  add: "add" as EnumModalTypes.add,
  view: "view" as EnumModalTypes.view,
  delete: "delete" as EnumModalTypes.delete,
  filter: "filter" as EnumModalTypes.filter,
  status: "status" as EnumModalTypes.status,
  confirmation: "confirmation" as EnumModalTypes.confirmation,
  layout: "layout" as EnumModalTypes.layout,
};
