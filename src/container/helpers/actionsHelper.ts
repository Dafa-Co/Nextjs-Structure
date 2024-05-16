"use server";

import {revalidateTag} from "next/cache";

export default class ActionsHelper {
  static async revalidate(tag: string) {
    revalidateTag(tag);
  }
}
