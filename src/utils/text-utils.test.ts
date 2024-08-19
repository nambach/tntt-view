import {normalizeSpecialVietnameseText, trimSpace} from './text-utils'

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

describe('trimSpace', () => {
  it('should remove redundant spaces', () => {
    expect(trimSpace('   ')).toBe('')
    expect(trimSpace('  Nguyễn  Du')).toBe('Nguyễn Du')
    expect(trimSpace(' Lê  Đức   Thọ  ')).toBe('Lê Đức Thọ')
    expect(trimSpace('Trần Đại Nghĩa')).toBe('Trần Đại Nghĩa')
  });
})
