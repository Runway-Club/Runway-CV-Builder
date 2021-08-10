var admin = require("firebase-admin");

var serviceAccount = require("../server/runway-cv-builder-firebase-adminsdk-e0svh-8530fb2529.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://runway-cv-builder-default-rtdb.firebaseio.com"
});

const firestore = admin.firestore();

class Database {

    //Thêm
    async addCV(UserID, CVID) {
        try {
            await firestore.collection("Users").doc(UserID).update({
                OwnedCV: admin.firestore.FieldValue.arrayUnion(CVID)
            })
        }
        catch (err) {

        }
        return 0;
    }

    //Xóa
    async deleteCV(id, CVID) {
        try {
            await firestore.collection("Users").doc(id).update({
                OwnedCV: admin.firestore.FieldValue.arrayRemove(CVID),
            })
        } catch (err) {

        }
        return 0;
    }

    //Sửa


    ////Lưu thông tin CV
    async saveCVInfo(CVID, Fname, Lname, Email, dob, phone, Address, Country, Bio, Skills, Hobbies, Educations, Employments) {
        try {
            await firestore.collection("CV").doc(CVID).set({
                Fname: Fname || null,
                Lname:Lname||null,
                Email: Email || null,
                dob: dob || null,
                phone: phone || null,
                Address: Address || null,
                Country: Country || null,
                Bio: Bio || null,
                Skills: Skills || null,
                Hobbies: Hobbies || null,
                Educations: Educations || null,
                Employments: Employments || null,
            })
        } catch (err) {

        }
        return 0;
    }
    //test add

}

module.exports = Database;





