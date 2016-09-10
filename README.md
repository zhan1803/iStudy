<center style="padding: 2em;">
		<img src="iStudy.png" alt="iStudy" align="middle">
</center>
<p align="center">
	<img src="https://img.shields.io/badge/gem-v2.5.1-green.svg" alt="gem version">
	<img src="https://img.shields.io/badge/Ruby-v2.3.1-red.svg" alt="ruby version">
	<img src="https://img.shields.io/badge/Rails-v5.0.0.1-red.svg" alt="rails version">
	<img src="https://img.shields.io/badge/MySQL-v5.7.14-blue.svg" alt="MySQL version">
	<img src="https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000" alt="MIT License">
</p>

## Synopsis
Our project is a great application that gives the students an easy way to manage their
daily academic activities. This application composes of three major features, giving class
registration suggestion according to the professor rating and class complexity, assisting
students to look for classmates in the same course as study companion who might be easy
to get along with based on their interests and language they are speaking and helping
students to make an appropriate meeting time with group members when taking a course
that requires group work. Unlike “Rate my professor” and “Doodle” which mainly focus
on one specific feature, our application put multiple features together to help students
manage their studies. One tool, one platform and one user account but manage
everything. We aim to make students’ academic life easier, more efficient and more
satisfied. <br><br>
**Checkout our [Project Charter](Scrum/AgileFramework/charter.pdf).**<br>
**Checkout our [Project Backlog](Scrum/AgileFramework/backlog.pdf).**
## Features
- [ ] Develop a user-friendly interface that can let users use the features conveniently.
- [ ] For the course registration suggestion feature, all the information about the courses
come from existing information at ratemyprofessor.com and reviews from current
registered students.
- [ ] For the finding classmates feature, the user can enter a matched chat room by
selecting the course they registered, the group they are interested in. (for example
if the user prefer Chinese-speaking people). 
- [ ] For the setting up appropriate meeting time feature, user can send the optional
meeting time to event creater by filling out the time slot table and as an event creator,
a user can set the due time for members to vote the time best fits their schedule and the system will automatically generate time for meeting based on the group members' vote on due
date. The system will send a reminder to members who might forget to vote before the due date.

## Setup
### Download
```
$ git clone git@github.com:wei170/iStudy.git
$ cd iStudy
$ bundle
```
### Ruby version

```
$ ruby -v
ruby 2.3.1
```
If your version is not >= 2.3.1, run

```
$ rvm use ruby-2.3.1
```
### Rails version
If you have not downloaded Rails before, checkout [this](http://railsapps.github.io/installing-rails.html) tutorial. <br>
Then check your rails version:

```
$ rails -v
Rails 5.0.0.1
```
If your version is not >= 5.0.0.1, run

```
$ gem update rails --no-ri --no-rdoc
```

### MySQL version
```
$ mysql -v
```

### Update Gems
We will use ```bundle-outdated``` to update all gems in our project.

**Installation**

```
$ gem install bundle_outdated
```
It currently requires RubyGems 1.6.0 or newer, which can be installed/updated with:

```
$ gem update --system
```
**Usage**

```
$ bundle-outdated
```
## Database (MySQL)
### Install MySQL
**Homebrew**

```
$ brew install mysql #it would take some while, continue your Netflix :)
```
**Another way**

Checkout [this](https://dev.mysql.com/downloads/mysql/) website

### Install MySQL Gem

I already add ```gem 'mysql2' '~> 0.4'``` in the ```Gemfile```. So if you run ```bundle```, it will be all set. <br>
**Note**: you should install mysql in your computer first and then install mysql gem!


## Acessing Portal
Navigate to the directory and run:

```
$ rails server
```
or to run the serve using Puma

```
$ rails s -d # booting Puma
$ kill -9 $(cat the_path_to_iStudy/tmp/pids/server.pid) #kill the server
```
Remember to change the path when you are killing the server

- [X] Locally: http://localhost:3000
- [ ] AWS: 

## Manual

## Contributors
@[Weijie Meng](https://github.com/WeijieMengCS): Team Leader<br>
@Xiaohua Shi: Documentation, UI/UX Designer<br>
@[Guocheng Wei](https://github.com/wei170): Backend, Database, UX Designer<br>
@[Mengxue Luo](https://github.com/luo149): Backend, Database, UX Designer<br>
@[Qian Zhang](https://github.com/zhan1803): Frontend, UI Designer<br>
@[Yang Shi](https://github.com/shi238): Frontend, UI Designer<br>

## Thanks

## MIT License

Copyright (c) 2016 iStudy Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

