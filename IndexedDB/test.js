let db;
const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = (event) => {
	db = event.target.result;
	const objectStore = db.createObjectStore("users", { keyPath: "id" });
	objectStore.createIndex("name", "name", { unique: false });
	objectStore.createIndex("email", "email", { unique: true });
};

request.onsuccess = (event) => {
	db = event.target.result;
	const transaction = db.transaction(["users"], "readwrite");
	const objectStore = transaction.objectStore("users");

	const user = {
		id: 1,
		name: "YDK",
		email: "DDUCK@example.com",
		age: 26,
		address: {
			street: "얼음길",
			city: "심시티",
			country: "대한민국"
		},
		hobbies: ["책싫어요", "멍때리기", "하늘바라보기"]
	};

	const addRequest = objectStore.add(user);

	addRequest.onsuccess = () => {
		document.getElementById('result').textContent = '사용자가 성공적으로 추가되었습니다.';
	};

	addRequest.onerror = () => {
		document.getElementById('result').textContent = '사용자 추가 중 오류가 발생했습니다.';
	};
};

request.onerror = (event) => {
	document.getElementById('result').textContent = 'IndexedDB를 열 수 없습니다: ' + event.target.error;
};