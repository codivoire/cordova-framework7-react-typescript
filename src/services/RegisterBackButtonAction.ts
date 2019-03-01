import { Platform } from "./Platform";

export default function(router: any) {
  Platform.registerBackButtonAction((event: Event) => {
    event.preventDefault();
    router.back();

    return false;
  }, 101);
}
