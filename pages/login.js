export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.githubForklink = page.locator('img[alt="Fork me on GitHub"]');
  }

  async goToLoginPage() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async clickGithubForkLink() {
    await this.githubForklink.click();
  }
}


 