import { commonApi } from '@/api/interface';
import type { TypeAjaxCllback } from '@/types/common.d';
import { Http } from 'nat-plus';

//获取所属页面
export const apiGetPower = (id: number): TypeAjaxCllback => {
  return Http.ajax({
    method: 'get',
    url: commonApi.GetPower,
    data: { pageId: id }
  }) as TypeAjaxCllback;
};
