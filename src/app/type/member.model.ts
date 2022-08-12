export type MEMBER = {
  name: string;
  userId: number;
  position: '役員' | 'リーダー' | '一般';
  status: {
    status: '出社' | '在宅' | '退社';
    bgColor: 'red' | 'blue' | 'green';
  };
  isBreak: boolean;
  breakStartTime: string;
  leftBreakTime: number;
};
