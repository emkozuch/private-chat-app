import moment from "moment";
import { useTranslation } from "react-i18next";
import { TKeys } from "translations";

export const useMessageDate = (date: string) => {
  const { t } = useTranslation();
  const dateAsMoment = moment.utc(date);
  const today = moment.utc().startOf("day");
  const yesterday = moment.utc().subtract(1, "day").startOf("day");

  const isToday = dateAsMoment.isSame(today, "day");
  const isYesterday = dateAsMoment.isSame(yesterday, "day");

  if (isToday) return dateAsMoment.format("HH:MM");
  if (isYesterday) return t(TKeys.DATE_YESTERDAY);

  return dateAsMoment.format("DD.MM.YYYY");
};
