function foo(a:number, b:number, s:string, t:string) {
    c = 3;
    if (a == 2) return 1;
    if (a == b) return 2;
    if (a == c) return 3;

    v = "hello";
    //ERROR:
    if (s == "bye") return 1;
    //ERROR:
    if (s == t) return 2;
    //TODO
    if (s == v) return 3;
}
