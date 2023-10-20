export class ExtendedEnum {
  protected constructor(
    public type: string,
    public subType: string | undefined,
    public requireSearch: boolean
  ) {}

  public async doSomething() {
    console.log(this.type);
  }
}

export class ExtendedEnumElements extends ExtendedEnum {
  public static FIRST = new ExtendedEnum("first element", undefined, false);
  public static SECOND = new ExtendedEnum("second element", "subtype", true);
  public static THIRD = new ExtendedEnum("let me see this joke here", "here", false);
}
