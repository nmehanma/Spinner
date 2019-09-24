let char = "|/-\|/-\|"

let time = 100

for (let i = 0; i < char.length; i++) {

  setTimeout(() => {process.stdout.write(`\r${char[i]}    `)}, time)
  time += 200;
  if (time === 100 + char.length * 200) {
    setTimeout(() => {process.stdout.write(`\r${char[i]}\n`)}, time)
  }
}

