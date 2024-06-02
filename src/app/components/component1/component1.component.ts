import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component {
  usersArray = [
    {
      id: 1,
      name: 'User One',
      username: 'user1',
      email: 'user1@example.in',
      phone: '+91-9876543210',
      website: 'user1.in',
      isEdit: false,
      backup: {},
    },
    {
      id: 2,
      name: 'User Two',
      username: 'user2',
      email: 'user2@example.in',
      phone: '+91-9123456780',
      website: 'user2.in',
      isEdit: false,
      backup: {},
    },
    {
      id: 3,
      name: 'User Three',
      username: 'user3',
      email: 'user3@example.in',
      phone: '+91-9823456781',
      website: 'user3.in',
      isEdit: false,
      backup: {},
    },
    {
      id: 4,
      name: 'User Four',
      username: 'user4',
      email: 'user4@example.in',
      phone: '+91-9871234567',
      website: 'user4.in',
      isEdit: false,
      backup: {},
    },
    {
      id: 5,
      name: 'User Five',
      username: 'user5',
      email: 'user5@example.in',
      phone: '+91-9812345678',
      website: 'user5.in',
      isEdit: false,
      backup: {},
    },
  ];

  newUser = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onEdit(item: any) {
    this.usersArray.forEach((element) => {
      element.isEdit = false;
    });
    item.isEdit = true;
    item.backup = { ...item }; 
  }

  onUpdate(item: any) {
    item.isEdit = false;
  }

  onCancel(item: any) {
    item.name = item.backup.name;
    item.email = item.backup.email;
    item.phone = item.backup.phone;
    item.isEdit = false;
  }

  onDelete(item: any) {
    this.usersArray = this.usersArray.filter((user) => user !== item);
  }

  onAdd() {
    const newUser = {
      ...this.newUser,
      id: this.getNewUserId(),
      isEdit: false,
      backup: {},
    };
    this.usersArray.push(newUser);
    this.newUser = {
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    }; 
  }

  getNewUserId(): number {
    return this.usersArray.length > 0
      ? Math.max(...this.usersArray.map((user) => user.id)) + 1
      : 1;
  }
}
