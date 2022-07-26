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

  ngOnInit(): void {}
  member: MEMBER[] = [
    {
      name: 'John',
      userId: 1,
      position: '役員',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
      breakStartTime: '',
    },
    {
      name: 'Mary',
      userId: 2,
      position: 'リーダー',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
      breakStartTime: '',
    },
    {
      name: 'Mike',
      userId: 3,
      position: '一般',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
      breakStartTime: '',
    },
    {
      name: 'Jane',
      userId: 4,
      position: '一般',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
      breakStartTime: '',
    },
    {
      name: 'Tom',
      userId: 5,
      position: '一般',
      status: { status: '退社', bgColor: 'red' },
      isBreak: false,
      breakStartTime: '',
    },
  ];

  formattedDate = this.datePipe.transform(new Date(), 'HH:mm:ss', '+0900');

  toggleIsBreak(member: MEMBER, $event: any): void {
    member.isBreak = !member.isBreak;
    $event.stopPropagation();
    //$event.preventDefault();
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
