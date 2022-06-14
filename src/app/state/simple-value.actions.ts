
export class IncrementValue {
  static readonly type = ' [Simple Value] Increment value by one ';
}

export class DecrementValue {
  static readonly type = ' [Simple Value] Decrement value by one '
}

export class ResetValue {
  static readonly type = ' [Simple Value] Reset value to zero '
}

export class SetValue {
  static readonly type = ' [Simple value] Set value defined by user'  
  constructor(public payload: number) {}
}