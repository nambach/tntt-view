export const DAY_OF_WEEK: any = {
  mon: 'Thứ hai',
  tue: 'Thứ ba',
  wed: 'Thứ tư',
  thu: 'Thứ năm',
  fri: 'Thứ sáu',
  sat: 'Thứ bảy',
  sun: 'Chủ nhật'
};

export const localizeDate = (dateStr: string) => {
  const dayOfWeek = dateStr.substring(0, 3).toLowerCase();
  return DAY_OF_WEEK[dayOfWeek] + dateStr.substring(3);
};
