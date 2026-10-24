/* Extra learning paths and optional secure AI service support for MizoLearn. */
const addedSkills = [
  {id:'robot',title:'Robotics Basics',icon:'⚙',level:'Beginner',desc:'Explore sensors, motors and simple robot decisions.',lessons:[
    ['What makes a robot?','A robot senses something, makes a decision and takes an action. Robots can help people with repeated or difficult tasks.','A robot vacuum senses a wall, turns, then moves in a new direction.','What are three common robot steps?',['Sense, decide, act','Sleep, eat, grow','Type, print, erase'],0],
    ['Meet sensors','A sensor measures something around a robot, such as light, distance or temperature. The robot uses this information to decide what to do.','A light sensor can help a small robot follow a bright line on the floor.','What does a sensor do?',['Measures something nearby','Stores every password','Makes electricity from words'],0],
    ['Motors make movement','A motor changes energy into movement. Robots use motors to turn wheels, lift arms or rotate parts.','A small motor turns two wheels so a robot car can move forward.','What does a motor help a robot do?',['Move a part','Understand a story','Connect to a teacher'],0],
    ['Give a robot instructions','A robot follows a program: a set of ordered instructions. Clear steps and a safe test help the robot do the task correctly.','Move forward, stop when the sensor sees a wall, then turn left.','Why should robot instructions be clear?',['So it can take the intended action','So it can read minds','So it never needs power'],0],
    ['Build and test safely','Start with a small goal, test one change at a time and keep hands away from moving parts. A failed test gives useful information.','If a robot turns too late, adjust the distance setting and test again.','What is a helpful way to improve a robot?',['Change one thing and test again','Change everything at once','Skip safety checks'],0]
  ]},
  {id:'finance',title:'Money Skills',icon:'$',level:'Beginner',desc:'Practise budgeting, saving and careful money choices.',lessons:[
    ['Needs and wants','A need is important for health and safety. A want is enjoyable but less urgent. Sorting the two can help you plan spending.','Food is a need. A second game after you already have one may be a want.','Which is usually a need?',['Clean drinking water','A new toy','A cinema ticket'],0],
    ['Make a simple budget','A budget is a plan for money coming in and money going out. It helps you decide what to spend, save or set aside.','If you receive 100, you could plan 50 for a need, 30 to save and 20 for a want.','What does a budget help you do?',['Plan how to use money','Make money appear','Hide every purchase'],0],
    ['Save for a goal','Saving means keeping some money for later. A clear goal and small regular amounts can make a big target feel manageable.','Save 10 each week toward a 50 book. After five weeks, you reach your goal.','What is one benefit of saving?',['Prepare for a future goal','Spend more today','Stop prices changing'],0],
    ['Understand interest','Interest is money paid for borrowing, or earned for saving. Check the rate and time because both affect the total.','If a bank pays interest on savings, your balance can slowly grow.','What can interest be?',['A cost to borrow or return on savings','A type of bank card','A promise of quick wealth'],0],
    ['Pause before a money choice','Before spending or sharing financial details, pause, check the facts and ask a trusted adult if unsure. Never share passwords or security codes.','A message promising an instant prize for your bank details is a warning sign.','What should you do with an unexpected money link?',['Check it with a trusted adult','Enter your password quickly','Forward it to everyone'],0]
  ]},
  {id:'data',title:'Data Skills',icon:'▥',level:'Beginner',desc:'Turn simple information into clear answers.',lessons:[
    ['What is data?','Data is information collected for a reason. It can be numbers, words, pictures or measurements. A clear question helps decide what data to collect.','A class poll asking “Which fruit do you like?” creates data about preferences.','Which is an example of data?',['A list of poll answers','A blank page','A guess with no information'],0],
    ['Ask a fair question','A fair survey question is clear and does not push people toward one answer. Ask only for information you need.','“Which game do you prefer?” is more neutral than “Why is Game A the best?”','Which question is more neutral?',['Which game do you prefer?','Why is my favourite game best?','You like Game A, right?'],0],
    ['Read a chart','Charts show information visually. Read the title, labels and scale before comparing bars or points.','A bar chart titled “Books read” uses one bar for each month and a number scale on the side.','What should you check first on a chart?',['Title, labels and scale','Only the tallest bar','The chart colour'],0],
    ['Find an average','The mean average is the total of the numbers divided by how many numbers there are. Unusual values can affect it.','For 2, 4 and 6, the total is 12. Divide by 3 to get a mean of 4.','What is the mean of 2, 4 and 6?',['4','6','12'],0],
    ['Respect data privacy','Collect and share data carefully. Remove names when they are not needed, and never post private details without permission.','Share class totals in a chart instead of publishing each learner’s name and score.','How can you make a shared chart safer?',['Leave out names that are not needed','Include addresses','Share private records publicly'],0]
  ]},
  {id:'marketing',title:'Digital Marketing',icon:'↗',level:'Beginner',desc:'Help useful ideas reach the people who need them.',lessons:[
    ['Know your audience','An audience is the group of people a message is for. Knowing what they need helps you choose clear words and useful information.','A poster for a school club should say who can join, when it meets and how to ask questions.','Why think about your audience?',['To make the message useful to them','To use the most words','To hide the main idea'],0],
    ['Write a clear message','A good message explains one main benefit and gives a next step. Keep it honest and easy to understand.','“Join the free art club on Friday at 3 pm. Ask Ms. Lee in Room 2.”','What makes a message clear?',['One idea and a helpful next step','Many unrelated ideas','A claim that cannot be proven'],0],
    ['Choose a channel','A channel is where people see a message, such as a poster, email or social page. Pick a channel your audience uses safely.','A notice on a school board may work better than a social post for a school event.','What is a marketing channel?',['A place where a message reaches people','A kind of battery','A customer name'],0],
    ['Use simple measures','A measure helps you learn whether a message worked. Count useful actions, not only views.','For a club poster, count how many people ask to join after seeing it.','Which measure best shows interest in a club?',['People who ask to join','Colour of the poster','Number of words in the title'],0],
    ['Be honest online','Trust matters. Use truthful claims, credit creators and ask permission before sharing someone’s photo or personal details.','Say “may help you practise” instead of promising guaranteed success.','Which marketing choice is trustworthy?',['Make claims you can support','Invent customer reviews','Use a photo without permission'],0]
  ]},
  {id:'design',title:'Design Basics',icon:'✎',level:'Beginner',desc:'Make clear, friendly visuals for real people.',lessons:[
    ['Start with the purpose','Design solves a communication problem. Decide what people should understand before choosing colours and shapes.','For an event flyer, the goal may be to help someone remember the date and place.','What should you decide first?',['What the design needs to communicate','Which decoration is brightest','How many fonts to use'],0],
    ['Create visual order','Visual hierarchy uses size, spacing and position to show what matters first. A clear title helps people scan a page.','Make the event name large, then show the time and place in smaller text.','What can hierarchy help readers do?',['Notice important information first','Read every item at once','Ignore the title'],0],
    ['Use colour with care','A small colour palette can make a design feel organised. Check that text stands out from its background.','Dark maroon text on a cream card is easier to read than pale yellow text on white.','What helps text stay readable?',['Strong contrast with the background','More colours in every line','Very small text'],0],
    ['Leave breathing room','Spacing separates ideas and makes a layout easier to scan. Empty space gives important parts room to stand out.','Add space between the heading, details and sign-up instructions on a flyer.','Why use spacing?',['Group ideas and make reading easier','Fill every blank area','Hide important details'],0],
    ['Ask for feedback','Show a draft to someone from your audience. Ask what they notice first and what is confusing, then improve one thing.','Ask a classmate to find the date on your flyer without help.','What is useful feedback?',['A clear note about what is confusing','Only “good” with no detail','A guess about the designer'],0]
  ]}
];
addedSkills.forEach(skill => {
  if (!skills.some(existing => existing.id === skill.id)) skills.push(skill);
});

bank.push(
  [/\b(robot|robotics|sensor|motor)\b/i,'Robots use sensors to notice the world, a program to choose what to do, and motors or other parts to act.'],
  [/\b(budget|budgeting|spend|spending|money|finance|financial|bank|saving|savings|interest|loan|borrow)\b/i,'A budget is a simple plan for money coming in and going out. List needs first, set a small saving goal, and keep passwords and bank details private.'],
  [/\b(data|dataset|spreadsheet|chart|graph|average|mean|median)\b/i,'Data is collected information. Start with a clear question, organise the answers, then read a chart by checking its title, labels and scale.'],
  [/\b(marketing|audience|advert|promotion|social media)\b/i,'Good digital marketing shares a clear, honest message with the people who need it. Know your audience, choose a safe channel and measure useful actions.'],
  [/\b(design|colour|color|layout|contrast|poster)\b/i,'A clear design starts with one purpose. Make the most important information easy to spot, use readable contrast and leave space between ideas.'],
  [/\b(debug|bug|program|javascript|python|code|coding|algorithm|variable|loop)\b/i,'An algorithm is a step-by-step plan. When code does not work, read the error, check one step at a time and try a tiny example.'],
  [/\b(privacy|private|personal information|address|phone number|password)\b/i,'Keep passwords, addresses, phone numbers and private school records out of public chats. Share only information that is needed, and ask a trusted adult if unsure.'],
  [/\b(homework|assignment|essay|schoolwork)\b/i,'Use AI to explain an idea, brainstorm or quiz you. Check important facts and write the final answer in your own words, following your teacher’s rules.'],
  [/\b(what can you do|help|topics|subjects)\b/i,'I can help with coding, AI, robotics, money skills, data, design, digital marketing and freelancing. Try “What is a robot sensor?” or “How do I make a budget?”']
);

const originalReply = reply;
reply = function(message) {
  const answer = originalReply(message);
  return answer.startsWith('Good question!')
    ? 'I can help with coding, AI, robotics, money skills, data, design, digital marketing and freelancing. Try asking one small question, such as “What is a sensor?” or “How do I make a budget?”'
    : answer;
};

state.aiEndpoint = state.aiEndpoint || '';
const originalAsk = ask;
ask = async function(message) {
  const text = message.trim();
  if (!text) return;
  const endpoint = state.aiEndpoint.trim();
  if (!endpoint || !navigator.onLine) return originalAsk(text);
  const answerIndex = state.messages.length + 1;
  state.messages.push({text, user:true}, {text:reply(text), user:false});
  state.questions.push({question:text, at:Date.now()});
  update();
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const response = await fetch(endpoint, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body:JSON.stringify({message:text, style:'short-and-simple'}), signal:controller.signal
    });
    clearTimeout(timer);
    if (!response.ok) return;
    const data = await response.json();
    const answer = data.answer || data.reply || data.output_text;
    if (answer && state.messages[answerIndex]) {
      state.messages[answerIndex].text = String(answer);
      save();
      if (state.tab === 'chat') render();
    }
  } catch (_) {
    /* The locally stored answer remains visible if the AI server is unavailable. */
  }
};

const renderWithExtraPaths = render;
render = function() {
  renderWithExtraPaths();
  const page = document.querySelector('.page');
  if (!page) return;
  page.querySelectorAll('.hero p').forEach(p => {
    if (p.textContent.includes('Fifteen small lessons')) p.textContent = '8 paths. 40 short lessons. Yours to explore.';
  });
  page.querySelectorAll('.pill').forEach(p => {
    if (p.textContent.includes('3 paths')) p.textContent = '8 paths · 40 lessons';
  });
  page.querySelectorAll('.stat strong').forEach(s => {
    s.textContent = s.textContent.replace('/15', '/40');
  });
  if (state.tab === 'chat') {
    const quick = page.querySelector('.quick');
    if (quick) ['How do robots use sensors?','How do I make a budget?','What is data?','How does digital marketing work?'].forEach(question => {
      if (quick.querySelector(`[data-question="${question}"]`)) return;
      const button = document.createElement('button');
      button.textContent = question;
      button.onclick = () => ask(question);
      quick.append(button);
    });
    const note = page.querySelector('.subheading');
    if (note) note.textContent = state.aiEndpoint
      ? 'Offline answers are saved. Online AI is ready when connected.'
      : 'Offline answers are ready. Add an AI server address in Profile to enable online AI.';
  }
  if (state.tab === 'profile' && state.page === 'home') {
    const card = document.createElement('section');
    card.className = 'card';
    card.style.marginTop = '16px';
    card.innerHTML = `<strong>Connect an online AI tutor</strong><p class="subheading" style="margin:6px 0 10px">Enter your secure server address. Never put an AI provider key in this app.</p><input id="aiEndpoint" type="url" value="${esc(state.aiEndpoint)}" placeholder="https://your-server.example/api/chat" style="width:100%;border:1px solid var(--border);border-radius:12px;padding:12px;background:var(--surface);color:var(--ink)"><small style="display:block;color:var(--muted);margin-top:8px">Your offline tutor keeps working if the server is unavailable.</small>`;
    page.append(card);
    const input = card.querySelector('#aiEndpoint');
    input.onchange = () => {
      state.aiEndpoint = input.value.trim();
      update();
      toast('AI server address saved');
    };
  }
};
