import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MEMBER } from 'src/app/type/member.model';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  providers: [DatePipe],
})
export class MemberComponent implements OnInit {
  constructor(public datePipe: DatePipe) {}

  ngOnInit(): void {
    this.showClock();
  }
  formattedDate: string = '';
  member: MEMBER[] = [
    {
      name: 'John',
      userId: 1,
      position: '役員',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
      breakStartTime: '',
      leftBreakTime: 60,
    },
    {
      name: 'Mary',
      userId: 2,
      position: 'リーダー',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
      breakStartTime: '',
      leftBreakTime: 60,
    },
    {
      name: 'Mike',
      userId: 3,
      position: '一般',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
      breakStartTime: '',
      leftBreakTime: 60,
    },
    {
      name: 'Jane',
      userId: 4,
      position: '一般',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
      breakStartTime: '',
      leftBreakTime: 60,
    },
    {
      name: 'Tom',
      userId: 5,
      position: '一般',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
      breakStartTime: '',
      leftBreakTime: 60,
    },
  ];

  startBreak(member: MEMBER): void {
    member.isBreak = true;
    member.breakStartTime = this.datePipe.transform(
      new Date(),
      'yyyy-MM-dd HH:mm:ss'
    )!;
  }

  endBreak(member: MEMBER): void {
    member.isBreak = false;
    member.breakStartTime = '';
  }

  showClock(): void {
    setInterval(() => {
      let formattedDate = this.datePipe.transform(
        new Date(),
        'HH:mm:ss',
        '+0900'
      );
      this.formattedDate = formattedDate!;
    }, 1000);
  }

  toggleIsBreak(member: MEMBER, $event: Event): void {
    member.isBreak = !member.isBreak;
    const timerId = setInterval(() => {
      member.leftBreakTime--;
      if (member.isBreak === false) {
        clearInterval(timerId);
      }
    }, 6000);

    $event.stopPropagation();
  }

  toggleStatus(member: MEMBER): void {
    if (member.status.status === '出社') {
      member.status.status = '在宅';
      member.status.bgColor = 'blue';
    } else if (member.status.status === '在宅') {
      member.status.status = '退社';
      member.status.bgColor = 'red';
    } else {
      member.status.status = '出社';
      member.status.bgColor = 'green';
    }
  }
}
