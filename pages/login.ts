export class LoginPage {
    userName_textbox: any;
    page: any;
    password_textbox: any;
    login_button: any;


    constructor(page:any) {
        this.page = page;
        this.userName_textbox = page.getByRole('textbox', { name: 'Username' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
    }

    async clickOnLogin(username:string, password:string){
            await this.userName_textbox.fill(username);
            await this.password_textbox.fill(password);
            await this.login_button.click();
    }


}