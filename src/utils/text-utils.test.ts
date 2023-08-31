import {normalizeSpecialVietnameseText} from './text-utils'

describe('normalizeSpecialVietnameseText', () => {
  it('should format correct value for "uy"', () => {
    const rs = normalizeSpecialVietnameseText('Quý Thuý Thuỷ')
    expect(rs).toBe('Quý Thúy Thủy')
  });

  it('should format correct value for "oa"', () => {
    const rs = normalizeSpecialVietnameseText('Hoà Hoàng Toàn Toà')
    expect(rs).toBe('Hòa Hoàng Toàn Tòa')
  });
});
