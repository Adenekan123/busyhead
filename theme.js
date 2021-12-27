// export const COLORS = {
//     primary: "#151515",
//     primaryText: "#cccccc",
//     secondary:"#323232",
//     tertiary:"#484848",
//     junior:"#212121",
//     fontMed:"1.2rem",

//     setColor(colors){
//         colors.forEach(color=> this[color.key] ? this[color.key = color.value] : false);
//     }

// }

export const COLORS = {
  primary: "#f4f7f5",
  primaryText: "#535657",
  secondary: "#dee7e7",
  tertiary: "#4f646f",
  junior: "#fff",
  fontMed: "1.2rem",

  setColor(colors) {
    colors.forEach((color) =>
      this[color.key] ? this[(color.key = color.value)] : false
    );
  },
};
