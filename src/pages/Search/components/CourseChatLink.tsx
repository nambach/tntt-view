import {Link} from '@mui/material';
import zalo from './zalo.json'
import * as React from 'react';

const currentYear = '2025-2026'

const data = `Chiên 1;https://zalo.me/g/qayakm273
Chiên 2A;https://zalo.me/g/tkhnsn448
Chiên 2B;https://zalo.me/g/mjbwqa142
Chiên 2C;https://zalo.me/g/qbnhyi660
Ấu 1A;https://zalo.me/g/rdgzaf553
Ấu 1B;https://zalo.me/g/bzaipe699
Ấu 1C;https://zalo.me/g/zwcahs373
Ấu 2A;https://zalo.me/g/cmfmma598
Ấu 2B;https://zalo.me/g/onqoqa187
Ấu 2C;https://zalo.me/g/tvxirn245
Ấu 2D;https://zalo.me/g/qgmilc490
Ấu 3A;https://zalo.me/g/asrgfz509
Ấu 3B;https://zalo.me/g/titfiu392
Ấu 3C;https://zalo.me/g/ngburw880
Ấu 3D;https://zalo.me/g/fgdulv038
Thiếu 1A;https://zalo.me/g/yszkbf008
Thiếu 1B;https://zalo.me/g/ficelo035
Thiếu 1C;https://zalo.me/g/mrtrgm819
Thiếu 2A;https://zalo.me/g/agctls796
Thiếu 2B;https://zalo.me/g/iczule435
Thiếu 2C;https://zalo.me/g/eadotg481
Thiếu 2D;https://zalo.me/g/mrljub702
Thiếu 3A;https://zalo.me/g/arhntq185
Thiếu 3B;https://zalo.me/g/txugls580
Thiếu 3C;https://zalo.me/g/viqtke076
Nghĩa 1A;https://zalo.me/g/dcgkij372
Nghĩa 1B;https://zalo.me/g/aiigqd603
Nghĩa 2A;https://zalo.me/g/kppedt688
Nghĩa 2B;https://zalo.me/g/ewtbew219
Nghĩa 3;https://zalo.me/g/wmnbsc722`

const readCsv = () => {
  const result: Record<string, string> = {}


  data.split('\n').forEach((line) => {
    const [courseName, url] = line.split(';')
    result[courseName] = url
  })
  return result
}

let currentYearUrl: Record<string, string> = zalo[currentYear]

export const CourseChatLink = ({courseName}:{courseName: string | undefined}) => {
  if (courseName == null) {
    return null
  }
  const url = currentYearUrl[courseName]
  return url ? <>
    <b>Liên lạc</b>
    <p>Nhóm Zalo <b>{courseName}</b> : <Link href={url} target='_blank'>Nhấn để tham gia</Link></p>
    </>
  :null
}
