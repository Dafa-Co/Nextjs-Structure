export default class AppHelper {
  static sliceContent(str: string, len = 25) {
    return str.length > len ? str.slice(0, len) + "..." : str;
  }

  static hashEmail(email: string) {
    const atIndex = email.indexOf("@");
    const username = email.substring(0, atIndex);
    const domain = email.substring(atIndex + 1);

    const hashedUsername = username.substring(0, 3) + "...";
    const hashedEmail = hashedUsername + "@" + domain;

    return hashedEmail;
  }

  static sliceName(name: string | undefined) {
    if (!name) {
      return "";
    }
    const nameArray = name.split(" ");
    return nameArray[0][0] + "." + nameArray[1];
  }

  static toFormData(
    data: Record<string, any>,
    formData: FormData = new FormData(),
    parentKey?: string
  ): FormData {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        const formKey = parentKey ? `${parentKey}[${key}]` : key;
        if (typeof value === "object" && !(value instanceof File)) {
          AppHelper.toFormData(value, formData, formKey);
        } else if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (typeof item === "object" && !(item instanceof File)) {
              AppHelper.toFormData(item, formData, `${formKey}[${index}]`);
            } else {
              if (item instanceof File) {
                formData.append(formKey, item);
              } else {
                formData.append(`${formKey}[${index}]`, item);
              }
            }
          });
        } else {
          if (value instanceof File) {
            formData.append(formKey, value);
          } else {
            formData.append(formKey, value);
          }
        }
      }
    }
    return formData;
  }
}
