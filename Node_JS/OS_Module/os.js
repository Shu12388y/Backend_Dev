//? It is the core module which tell you about the operationg system

const os=require("os")


//? type of user operating system
// console.log(os.type())
//? Output: Windows_NT



//? operating system platform
// console.log(os.platform())
//? Output: win32


//? about cpu architecture
// console.log(os.arch())
//?Output: x64  



//? CPU details
// console.log(os.cpus())

//?? Ouput:
// ?[
// ?    {
// ?      model: 'AMD Ryzen 3 2200U with Radeon Vega Mobile Gfx  ',
// ?      speed: 2495,
// ?      times: {
// ?        user: 2984296,
// ?        nice: 0,
// ?        sys: 1409109,
// ?        idle: 27356828,
// ?        irq: 221000
// ?      }
// ?    },
// ?    {
// ?      model: 'AMD Ryzen 3 2200U with Radeon Vega Mobile Gfx  ',
// ?      speed: 2495,
// ?      times: { user: 2698828, nice: 0, sys: 711750, idle: 28339437, irq: 27078 }
// ?    },
// ?    {
// ?      model: 'AMD Ryzen 3 2200U with Radeon Vega Mobile Gfx  ',
// ?      speed: 2495,
// ?      times: { user: 3742890, nice: 0, sys: 822359, idle: 27184765, irq: 23421 }
// ?    },
// ?    {
// ?      model: 'AMD Ryzen 3 2200U with Radeon Vega Mobile Gfx  ',
// ?      speed: 2495,
// ?      times: { user: 2859218, nice: 0, sys: 637734, idle: 28253062, irq: 13078 }
// ?    }
// ?  ]




//? memory

// console.log(os.freemem())  //? It tell about the free memory in your computer
//? output: 729411584

// console.log(os.totalmem())  //? It tell you about hte total memory in your computer
//? output: 3704930304




//? uptime
console.log(os.uptime())

