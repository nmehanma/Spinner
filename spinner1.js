// process.stdout.write('hello from spinner1.js... \rheyyy\n');

let newLine = "\n"

setTimeout(() => {
  process.stdout.write('\r|      ');
  setTimeout(() => {
    process.stdout.write('\r/      ');
    setTimeout(() => {
      process.stdout.write('\r-      ');
      setTimeout(() => {
        process.stdout.write('\r\      ');
        setTimeout(() => {
          process.stdout.write('\r|      ');
          setTimeout(() => {
            process.stdout.write('\r/      ');
            setTimeout(() => {
              process.stdout.write('\r-      ');
              setTimeout(() => {
                process.stdout.write('\r\      ');
                setTimeout(() => { 
                  process.stdout.write('\r|      ');
                  console.log("\n");
                }, 200);
              }, 200);
            }, 200)
          }, 200)
        }, 200) 
      }, 200)
    }, 200)
  }, 200)
}, 200);


// peer editing with @JOadelic






