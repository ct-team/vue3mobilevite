import { indexApi } from '@/api/interface';
import type { TypeAjaxCllback } from '@/types/common.d';
import { Http } from 'nat-plus';

//添加预警配置
export const apiAddWarningConfig = (params: any): TypeAjaxCllback => {
  return Http.ajax({
    method: 'post',
    url: indexApi.AddWarningConfig,
    data: params
  }) as TypeAjaxCllback;
};
