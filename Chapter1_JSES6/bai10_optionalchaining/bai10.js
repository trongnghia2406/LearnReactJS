let user = {};
// console.log(user.address) // Output: undefined
// console.log(user.address.street); // Lỗi: Cannot read property 'street' of undefined
console.log(user?.address?.street); // Output: undefined
let userAdmin = {};
console.log(userAdmin?.admin?.name ?? 'No admin'); // Output: No admin
userAdmin?.admin?.();
