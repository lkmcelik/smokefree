### I want to create a static website on GitHub.

### content: 

 SmokeFree is your personal companion on the journey to quit smoking for good. Track your progress with easy-to-read widgets showing exactly how many days you've been smoke-free, how much money you've saved, and the positive health changes happening in your body.
• See your smoke-free streak right on your home screen
• Track money saved from not buying cigarettes
• Count cigarettes not smoked since quitting
• Monitor health recovery milestones
• Choose between simple and detailed widget styles
• Celebrate key achievements at 1 day, 1 month, 3 months, and 1 year
Whether you've just quit or are months into your journey, SmokeFree provides the visual motivation you need to stay on track and remind yourself of the amazing progress you're making every single day.

### keywords:
quit,smoking,tracker,cigarette,health,recovery,habit,addiction,smoke,progress,widget,money,saved


The website localization content is as follows (build website based on these):

/* 
  Localizable.strings
  SmokeFree
  
  Localization strings for the app
*/

// MARK: - Common UI Elements
"back" = "Back";
"next" = "Next";
"continue" = "Continue";
"complete" = "Complete";
"skip" = "Skip";
"cancel" = "Cancel";
"save" = "Save";
"delete" = "Delete";
"edit" = "Edit";
"done" = "Done";
"loading" = "Loading...";
"common.ok" = "OK";

// MARK: - Tab Bar
"tab.dashboard" = "Dashboard";
"tab.health" = "Health";
"tab.achievements" = "Achievements";
"tab.settings" = "Settings";

// MARK: - Wizard Navigation
"wizard.progress" = "Step %@ of %@";
"wizard.loading" = "Preparing your SmokeFree experience...";
"wizard.almost_there" = "Almost there!";
"progress.accessibility.label" = "Progress indicator";
"progress.accessibility.value" = "Step %d of %d, %d%% complete";
"progress.accessibility.hint" = "Shows your progress through the onboarding wizard";
"wizard.finish" = "Finish";
"wizard.back.accessibility.label" = "Go back";
"wizard.back.accessibility.hint" = "Returns to the previous step in the wizard";
"wizard.next.accessibility.hint" = "Proceeds to the next step in the wizard";
"wizard.next.accessibility.hint" = "Proceeds to the next step in the wizard";

// Add missing keys for QuitDatePicker.swift
"wizard.quit_date.title" = "When did you quit smoking?";
"wizard.quit_date.date_picker" = "Quit Date";
"wizard.quit_date.description" = "Select the date and time when you had your last cigarette.";
"wizard.quit_date.congratulations" = "Congratulations on taking this important step!";
"accessibility.wizard.quit_date.picker.hint" = "Select the date and time when you quit smoking";

// MARK: - Welcome Screen
"welcome.title" = "Welcome to SmokeFree";
"welcome.subtitle" = "Your journey to a healthier life starts now";
"welcome.description" = "SmokeFree will help you track your progress, save money, and improve your health after quitting smoking.";
"welcome.get_started" = "Get Started";

// MARK: - Quit Date Screen
"quit_date.title" = "When did you quit smoking?";
"quit_date.subtitle" = "Or when do you plan to quit?";
"quit_date.today" = "Today";
"quit_date.yesterday" = "Yesterday";
"quit_date.days_ago" = "%@ days ago";
"quit_date.custom" = "Choose a date";
"quit_date.future_plan" = "I plan to quit on:";
"quit_date.select_description" = "Select the date and time when you had your last cigarette.";
"quit_date.picker_label" = "Quit Date";
"quit_date.future_note" = "If you haven't quit yet, select today's date and time";
"quit_date.accessibility.label" = "Quit Date Picker";
"quit_date.accessibility.hint" = "Select the date and time when you quit smoking";

// MARK: - Smoking Habits Screen
"smoking_habits.title" = "Your Smoking Habits";
"smoking_habits.description" = "Tell us about your smoking habits to calculate your health improvements and savings.";
"smoking_habits.cigarettes_per_day" = "Cigarettes per day";
"smoking_habits.cigarettes_per_day.placeholder" = "e.g., 20";
"smoking_habits.cigarettes_per_pack" = "Cigarettes per pack";
"smoking_habits.cigarettes_per_pack.placeholder" = "e.g., 20";
"smoking_habits.price_per_pack" = "Price per pack";
"smoking_habits.price_per_pack.placeholder" = "e.g., 10.00";
"smoking_habits.accessibility.label" = "Smoking Habits Form";
"smoking_habits.accessibility.hint" = "Enter information about your smoking habits";

// MARK: - Currency Selection Screen
"currency.title" = "Select Your Currency";
"currency.subtitle" = "We'll use this for savings calculations";
"currency.usd" = "US Dollar (USD)";
"currency.eur" = "Euro (EUR)";
"currency.gbp" = "British Pound (GBP)";
"currency.jpy" = "Japanese Yen (JPY)";
"currency.aud" = "Australian Dollar (AUD)";
"currency.cad" = "Canadian Dollar (CAD)";
"currency.other" = "Other";
"currency.custom_symbol" = "Enter custom symbol:";
"currency.description" = "Choose your currency to calculate savings accurately";
"currency.other_symbol_placeholder" = "Other currency symbol";
"currency.info_note" = "This will be used to display your savings";
"currency.accessibility.label" = "Currency Selector";
"currency.accessibility.hint" = "Choose your preferred currency for savings calculations";

// MARK: - Theme Selection Screen
"theme.title" = "Choose Your Theme";
"theme.subtitle" = "Select a theme for your app experience";
"theme.light" = "Light";
"theme.dark" = "Dark";
"theme.system" = "System Default";
"theme.light_description" = "Always use light mode";
"theme.dark_description" = "Always use dark mode";
"theme.system_description" = "Match your device settings";
"theme.preview" = "Preview";
"theme.change_later_note" = "You can change your theme later in settings";
"theme.accessibility.label" = "Theme Selection";
"theme.accessibility.hint" = "Choose a light, dark, or system theme for the app.";
"theme.preview.app_title" = "App Preview";
"theme.preview.sample_title" = "Sample Title";
"theme.preview.sample_text" = "This is how text will appear";
"theme.preview.button_example" = "Button Example";

// MARK: - Summary Screen
"summary.title" = "Your Information";
"summary.description" = "Review your information before continuing";
"summary.quit_date" = "Quit Date:";
"summary.cigarettes_per_day" = "Cigarettes per day:";
"summary.cigarettes_per_pack" = "Cigarettes per pack:";
"summary.pack_price" = "Pack price:";
"summary.currency" = "Currency:";
"summary.theme" = "Theme:";
"summary.savings_projection" = "Projected savings after 1 year:";
"summary.health_improvements" = "Health improvements you'll see:";
"summary.continue_button" = "Complete Setup";
"summary.smoking_habits" = "Smoking Habits";
"summary.price" = "Price";
"summary.cigarettes_per_day_format" = "%d cigarettes/day\n%d cigarettes/pack";
"summary.price_per_pack_format" = "%@ per pack";
"summary.update_note" = "You can update these details later in settings";
"summary.accessibility.label" = "Summary Screen";
"summary.accessibility.hint" = "Review your profile information before continuing to the next step.";

// MARK: - Completion Screen
"completion.title" = "Setup Complete!";
"completion.subtitle" = "You're all set to start your smoke-free journey";
"completion.description" = "We've saved your information and are ready to help you track your progress.";
"completion.cta" = "Start Your Smoke-Free Journey";

// MARK: - Paywall
"paywall.loading" = "Preparing your premium experience...";
"paywall.preparing" = "Loading subscription options...";
"paywall.title" = "Unlock SmokeFree Premium";
"paywall.features_title" = "Premium Features";
"paywall.restore" = "Restore Purchases";
"paywall.terms" = "Terms of Service";
"paywall.privacy" = "Privacy Policy";
"paywall.monthly" = "Monthly";
"paywall.yearly" = "Yearly";
"paywall.weekly" = "Weekly";
"paywall.lifetime" = "Lifetime";
"paywall.save_percent" = "Save %@";
"paywall.free_trial" = "%@-day free trial";
"paywall.most_popular" = "Most Popular";
"paywall.subscribe_button" = "Subscribe Now";
"paywall.continue_free" = "Continue with Free Version";
"paywall.subscription_options" = "Subscription Options";
"paywall.testing_mode" = "Testing Mode";
"paywall.testing_mode_description" = "App Store products unavailable. Choose a testing option:";
"paywall.test_free_trial" = "Test Free Trial (7 days)";
"paywall.test_monthly" = "Test Monthly Subscription";
"paywall.test_annual" = "Test Annual Subscription";
"paywall.try_loading_real" = "Try Loading Real Products";
"paywall.load_error" = "Unable to load subscription options. Please try again later.";
"paywall.retry" = "Retry";

// MARK: - Features List
"features.detailed_stats" = "Detailed health statistics";
"features.advanced_insights" = "Advanced progress insights";
"features.craving_tools" = "Craving management tools";
"features.premium_themes" = "Premium themes and customization";
"features.widget_support" = "Advanced home screen widgets";
"features.cloud_backup" = "Cloud backup of your data";
"features.ad_free" = "Ad-free experience";

// MARK: - Health Benefits
"health.title" = "Health Journey";
"health.of_total" = "of %d";
"health.stats.lung_capacity" = "Lung Capacity";
"health.stats.heart_health" = "Heart Health";
"health.stats.energy_level" = "Energy Level";
"health.sections.short_term" = "Short-term Benefits";
"health.sections.medium_term" = "Medium-term Benefits";
"health.sections.long_term" = "Long-term Benefits";
"health.status.improving" = "Improving";
"health.status.good" = "Good";
"health.status.very_good" = "Very Good";
"health.status.excellent" = "Excellent";
"health.status.recovering" = "Recovering";
"health.status.building" = "Building";
"health.status.increasing" = "Increasing";
"health.status.high" = "High";
"health.status.optimal" = "Optimal";
"health.20_minutes" = "After 20 minutes: Blood pressure drops";
"health.12_hours" = "After 12 hours: Carbon monoxide level returns to normal";
"health.2_weeks" = "After 2 weeks: Circulation improves";
"health.1_month" = "After 1 month: Lung function increases";
"health.9_months" = "After 9 months: Decreased coughing and shortness of breath";
"health.1_year" = "After 1 year: Risk of coronary heart disease cut in half";
"health.milestone.progress" = "%d%%";

// MARK: - Notifications
"notification.milestone" = "Congratulations on %@ days smoke-free!";
"notification.savings" = "You've saved %@ by not smoking!";
"notification.health" = "Your health milestone: %@";

// MARK: - Language Selection
"language.selection_title" = "Select Language";
"language.selection_subtitle" = "Choose your preferred language";
"language.english" = "English";
"language.spanish" = "Spanish";
"language.french" = "French";
"language.german" = "German";
"language.japanese" = "Japanese";
"language.chinese" = "Chinese (Simplified)";
"language.russian" = "Russian";
"language.arabic" = "Arabic";
"language.turkish" = "Turkish";
"language.current" = "Current: %@";
"language.system_default" = "System Default";
"language.change_confirmation" = "Change language to %@?";
"language.restart_required" = "Some changes may require restarting the app";

// MARK: - Errors
"error.generic" = "Something went wrong. Please try again.";
"error.subscription" = "Unable to complete subscription. Please try again later.";
"error.data_save" = "Could not save your data. Please check your settings.";
"error.loading" = "Failed to load data. Please restart the app.";
"error.data_loading_title" = "Data Loading Error";
"error.data_loading_message" = "There was an issue loading your data. Default values have been used instead.";

// MARK: - Settings
"settings.section.user_information" = "User Information";
"settings.quit_date" = "Quit Date";
"settings.cigarettes_per_day" = "Cigarettes Per Day";
"settings.price_per_pack" = "Price Per Pack";
"settings.cigarettes_per_pack" = "Cigarettes Per Pack";
"settings.edit_information" = "Edit Information";
"settings.section.preferences" = "Preferences";
"settings.enable_notifications" = "Enable Notifications";
"settings.language" = "Language";
"settings.send_test_notification" = "Send Test Notification";
"settings.refresh_notifications" = "Refresh All Notifications";
"settings.app_theme" = "App Theme";
"settings.section.application" = "Application";
"settings.about" = "About";
"settings.reset_progress" = "Reset Progress";
"settings.debug.check_notifications" = "Check Pending Notifications";
"settings.debug.print_notification_status" = "Print Notification Status";

// MARK: - Dashboard View
"dashboard.title" = "Quit Smoking";
"dashboard.smoke_free_for" = "Smoke-Free For";
"dashboard.section.progress" = "Your Progress";
"dashboard.section.achievements" = "Your Achievements";

// Health Card
"dashboard.card.health.title" = "Health";
"dashboard.card.health.lung_recovery" = "Lung Recovery";
"dashboard.popup.health.title" = "Lung Recovery";
"dashboard.popup.health.smoke_free_for" = "You've been smoke-free for %@";
"dashboard.popup.health.next_milestone" = "Next Milestone";
"dashboard.popup.health.percentage_format" = "%d%%";
"dashboard.popup.health.time_format.years_months" = "%d year%@ and %d month%@";
"dashboard.popup.health.time_format.months_weeks" = "%d month%@ and %d week%@";
"dashboard.popup.health.time_format.weeks_days" = "%d week%@ and %d day%@";
"dashboard.popup.health.time_format.days_hours" = "%d day%@ and %d hour%@";
"dashboard.popup.health.time_format.hours_minutes" = "%d hour%@ and %d minute%@";
"dashboard.popup.health.time_format.minutes_seconds" = "%d minute%@ and %d second%@";
"dashboard.popup.health.plural_suffix" = "s";
"dashboard.popup.health.singular_suffix" = "";

// Money Card
"dashboard.card.money.title" = "Money Saved";
"dashboard.card.money.total_savings" = "Total Savings";
"dashboard.popup.money.title" = "Money Saved";
"dashboard.popup.money.since_quitting" = "Since you quit smoking %@ ago";
"dashboard.popup.money.not_smoked.label" = "You haven't smoked";
"dashboard.popup.money.not_smoked.value" = "%d cigarettes";
"dashboard.popup.money.packs_saved.label" = "Packs not purchased";
"dashboard.popup.money.price_per_pack.label" = "Price per pack";
"dashboard.popup.money.daily_savings.label" = "Daily savings";
"dashboard.popup.money.saving_projections" = "Saving Projections";
"dashboard.popup.money.price_format" = "%@%.2f";
"dashboard.popup.money.projection_months_format" = "%dmo";
"dashboard.popup.money.projection_years_format" = "%dyr";
"dashboard.popup.money.currency_amount_format" = "%@ %d";

// Not Smoked Card
"dashboard.card.not_smoked.title" = "Not Smoked";
"dashboard.card.not_smoked.cigarettes" = "cigarettes";
"dashboard.card.not_smoked.subtitle" = "Cigarettes Avoided";

// Time Saved Card
"dashboard.card.time_saved.title" = "Time Saved";
"dashboard.card.time_saved.subtitle" = "Smoking Time Saved";
"dashboard.card.time_saved.days_hours_format" = "%dd %dh";
"dashboard.card.time_saved.minutes_format" = "%dm";

// MARK: - Motivational Quotes
"motivational.title" = "Today's Motivation";
"motivational.refresh.accessibility" = "Get a new motivational quote";
"motivational.quote.1" = "Every cigarette not smoked is a victory. Keep going!";
"motivational.quote.2" = "Your lungs are thanking you for every smoke-free day.";
"motivational.quote.3" = "You're not giving up smoking, you're gaining a healthier life.";
"motivational.quote.4" = "Cravings pass whether you smoke or not. Choose health.";
"motivational.quote.5" = "Your body is healing a little more with each passing day.";

// MARK: - Time Units
"time_unit.year" = "Year";
"time_unit.month" = "Month";
"time_unit.week" = "Week";
"time_unit.day" = "Day";
"time_unit.hour" = "Hour";
"time_unit.min" = "Min";
"time_unit.sec" = "Sec";
"time_unit.ms" = "ms";

// MARK: - Achievements
"achievement.unlocked" = "Achievement Unlocked!";
"achievement.achieved" = "Achieved";
"achievement.percent_complete" = "%d%% Complete";
"achievement.share" = "Share achievement";
"achievement.accessibility.label" = "Achievement: %@, Status: %@";
"achievements.progress_text" = "You've unlocked %d%% of all achievements";
"achievements.filter.all" = "All";
"achievements.filter.accessibility" = "Filter achievements by %@ category";
"achievement.days_format" = "%d days";
"achievement.hours_format" = "%d hours";
"achievement.fallback_hours_format" = "%d hours";

/* TestCelebrationView */
"test_celebration.title" = "Celebration Animation Test";
"test_celebration.send_test_notification" = "Send Test Notification";
"test_celebration.send_health_milestone" = "Send Health Milestone";
"test_celebration.send_achievement" = "Send Achievement";
"test_celebration.trigger_animations" = "Trigger Celebration Animations";
"test_celebration.force_display" = "FORCE DISPLAY CELEBRATION";
"test_celebration.print_settings" = "Print Notification Settings";
"test_celebration.send_both" = "Send Health & Achievement Notifications";
"test_celebration.debug_info" = "Debug Information";
"test_celebration.notification_note" = "Note: Make sure notifications are enabled in your device settings for this app.";
"test_celebration.direct_test_title" = "Direct Test Achievement";
"test_celebration.direct_test_description" = "This celebration was triggered directly without using notifications";

/* Test Notifications */
"test_notification.title" = "Test Notification";
"test_notification.body" = "This is a test notification";

/* Health Milestone Notifications */
"health_milestone.title" = "Health Milestone Achieved!";
"health_milestone.24hours" = "After 24 hours";
"health_milestone.24hours_description" = "Your chance of a heart attack has already decreased!";

/* Achievement Notifications */
"achievement.title" = "Achievement Unlocked!";
"achievement.stubborn4" = "Stubborn 4/6";
"achievement.stubborn4_description" = "Stubborn 4/6: You have not smoked for 1 day.";

/* 
 * Localization Completion
 * All files from localization-todo.md have been reviewed and updated
 * Last updated: June 2023
 */ 

/* AppTheme Model */
"app_theme.light" = "Light";
"app_theme.dark" = "Dark";
"app_theme.system" = "System";

/* HealthKit Manager */
"healthkit.smoking_cessation_activity" = "SmokeFree App - Smoking Cessation";

/* Health Milestones */
"milestone.20_minutes" = "After 20 minutes";
"milestone.20_minutes_description" = "Heart rate and blood pressure start to drop to normal levels, reducing the immediate strain on the heart. Blood vessels begin to widen, improving circulation, especially to hands and feet, making them feel warmer.";

"milestone.8_12_hours" = "After 8-12 hours";
"milestone.8_12_hours_description" = "The carbon monoxide from cigarette smoke is eliminated from the body, bringing its levels back to normal. This allows oxygen levels in the blood to rise, improving oxygen supply to organs. The heart and muscles function more efficiently, reducing fatigue and improving overall energy.";

"milestone.24_hours" = "After 24 hours";
"milestone.24_hours_description" = "Nicotine levels in the blood drop to nearly zero, reducing its impact on the nervous system. Blood vessels that were constricted due to smoking start to relax, increasing oxygen supply to the heart. This reduces the risk of a heart attack as oxygen flow to the heart muscle improves.";

"milestone.48_hours_2_days" = "After 48 hours (2 days)";
"milestone.48_hours_2_days_description" = "Damaged nerve endings begin to regenerate, significantly enhancing the senses of taste and smell. Foods and scents become more noticeable and enjoyable. The body is now completely free of nicotine, leading to a decrease in nicotine withdrawal symptoms, although cravings may still be present.";

"milestone.72_hours_3_days" = "After 72 hours (3 days)";
"milestone.72_hours_3_days_description" = "Bronchial tubes relax, making breathing noticeably easier. Lung capacity increases, allowing deeper breaths with less effort. This is the peak of nicotine withdrawal symptoms, which may include irritability, headaches, and intense cravings, but these will gradually subside.";

"milestone.1_week" = "After 1 week";
"milestone.1_week_description" = "Carbon monoxide levels in the blood have returned to normal, ensuring optimal oxygen transport to organs. Breathing becomes significantly easier, and energy levels continue to improve. The first week is a crucial milestone, as those who make it this far have a much higher chance of quitting permanently.";

"milestone.2_weeks" = "After 2 weeks";
"milestone.2_weeks_description" = "Blood circulation continues to improve, allowing oxygen to reach muscles more efficiently. Physical activity, such as walking or climbing stairs, feels less strenuous. Lung function improves by approximately 30%, making it easier to breathe deeply and sustain exercise for longer durations.";

"milestone.3_4_weeks_1_month" = "After 3-4 weeks (1 month)";
"milestone.3_4_weeks_1_month_description" = "The lung's natural cleansing system, the tiny hair-like structures called cilia, begin to regrow and function properly. These structures help clear mucus, reducing coughing and infection risk. Sinus congestion and shortness of breath improve significantly. The risk of respiratory infections starts to decline.";

"milestone.3_6_months" = "After 3-6 months";
"milestone.3_6_months_description" = "Coughing and mucus production continue to decrease as the lungs heal. The lungs' ability to expel mucus and harmful substances improves, reducing respiratory infections. Physical activities such as running or climbing stairs become much easier. Stress and cigarette cravings decrease as the body adapts to a smoke-free state.";

"milestone.1_year" = "After 1 year";
"milestone.1_year_description" = "Lung function is significantly improved compared to a year ago. Shortness of breath and coughing are drastically reduced. The risk of coronary heart disease drops by 50% compared to a smoker, as blood vessels continue to heal, improving overall cardiovascular health.";

"milestone.5_years" = "After 5 years";
"milestone.5_years_description" = "The risk of stroke has returned to the same level as that of a non-smoker. The body's ability to repair blood vessel damage has significantly improved. The risk of developing smoking-related cancers, such as oral, throat, esophagus, and bladder cancer, is reduced by 50%.";

"milestone.10_years" = "After 10 years";
"milestone.10_years_description" = "The likelihood of dying from lung cancer is 50% lower than that of a smoker. The cells in the lungs continue to regenerate, making the body more resilient to various types of cancer, including bladder, kidney, pancreas, and throat cancer. The immune system is stronger, reducing the risk of infections and chronic diseases.";

"milestone.15_years" = "After 15 years";
"milestone.15_years_description" = "The risk of heart disease, including coronary artery disease, is now the same as that of a lifelong non-smoker. The body's circulatory system has fully recovered, significantly reducing the chances of heart attack and stroke. Overall mortality risk is greatly reduced, and life expectancy increases, approaching that of a non-smoker.";

/* Achievement Categories */
"achievement.category.willing" = "Willing";
"achievement.category.stubborn" = "Stubborn";
"achievement.category.determined" = "Determined";
"achievement.category.resolute" = "Resolute";
"achievement.category.committed" = "Committed";

/* Achievement Titles and Descriptions */
// Willing category
"achievement.willing_1" = "Willing 1/1";
"achievement.willing_1_description" = "Congratulations on quitting smoking.";

// Stubborn category
"achievement.stubborn_1" = "Stubborn 1/6";
"achievement.stubborn_1_description" = "You have not smoked for 1 hour.";
"achievement.stubborn_2" = "Stubborn 2/6";
"achievement.stubborn_2_description" = "You have not smoked for 6 hours.";
"achievement.stubborn_3" = "Stubborn 3/6";
"achievement.stubborn_3_description" = "You have not smoked for 12 hours.";
"achievement.stubborn_4" = "Stubborn 4/6";
"achievement.stubborn_4_description" = "You have not smoked for 1 day.";
"achievement.stubborn_5" = "Stubborn 5/6";
"achievement.stubborn_5_description" = "You have not smoked for 2 days.";
"achievement.stubborn_6" = "Stubborn 6/6";
"achievement.stubborn_6_description" = "You have not smoked for 3 days.";

// Determined category
"achievement.determined_1" = "Determined 1/6";
"achievement.determined_1_description" = "You have not smoked for 1 week.";
"achievement.determined_2" = "Determined 2/6";
"achievement.determined_2_description" = "You have not smoked for 2 weeks.";
"achievement.determined_3" = "Determined 3/6";
"achievement.determined_3_description" = "You have not smoked for 3 weeks.";
"achievement.determined_4" = "Determined 4/6";
"achievement.determined_4_description" = "You have not smoked for 1 month.";
"achievement.determined_5" = "Determined 5/6";
"achievement.determined_5_description" = "You have not smoked for 2 months.";
"achievement.determined_6" = "Determined 6/6";
"achievement.determined_6_description" = "You have not smoked for 3 months.";

// Resolute category
"achievement.resolute_1" = "Resolute 1/6";
"achievement.resolute_1_description" = "You have not smoked for 6 months.";
"achievement.resolute_2" = "Resolute 2/6";
"achievement.resolute_2_description" = "You have not smoked for 9 months.";
"achievement.resolute_3" = "Resolute 3/6";
"achievement.resolute_3_description" = "You have not smoked for 1 year.";
"achievement.resolute_4" = "Resolute 4/6";
"achievement.resolute_4_description" = "You have not smoked for 1.5 years.";
"achievement.resolute_5" = "Resolute 5/6";
"achievement.resolute_5_description" = "You have not smoked for 2 years.";
"achievement.resolute_6" = "Resolute 6/6";
"achievement.resolute_6_description" = "You have not smoked for 3 years.";

// Committed category
"achievement.committed_1" = "Committed 1/6";
"achievement.committed_1_description" = "You have not smoked for 5 years.";
"achievement.committed_2" = "Committed 2/6";
"achievement.committed_2_description" = "You have not smoked for 7 years.";
"achievement.committed_3" = "Committed 3/6";
"achievement.committed_3_description" = "You have not smoked for 10 years.";
"achievement.committed_4" = "Committed 4/6";
"achievement.committed_4_description" = "You have not smoked for 15 years.";
"achievement.committed_5" = "Committed 5/6";
"achievement.committed_5_description" = "You have not smoked for 20 years.";
"achievement.committed_6" = "Committed 6/6";
"achievement.committed_6_description" = "You have not smoked for 25 years.";

/* Dashboard Health Popup - Detailed Descriptions */
"dashboard.popup.health.detailed_description.first_2_hours" = "Your body is already beginning to heal. Carbon monoxide levels in your blood begin dropping, allowing more oxygen to reach your vital organs. You may notice your heart rate and blood pressure beginning to normalize.";
"dashboard.popup.health.detailed_description.2_12_hours" = "Oxygen levels in your blood are continuing to increase, and carbon monoxide levels are decreasing. Your circulation is improving, especially to your extremities, which might feel warmer. Your heart is under less strain now.";
"dashboard.popup.health.detailed_description.12_24_hours" = "All carbon monoxide has been eliminated from your body. Your lungs are beginning to clear out mucus and other smoking debris. Your risk of heart attack has already started to decrease as oxygen levels normalize in your blood.";
"dashboard.popup.health.detailed_description.1_2_days" = "Your senses of taste and smell are recovering. Nerve endings damaged by smoking are beginning to regrow. You might notice food tastes better and smells are more noticeable. The nicotine has left your body, though cravings may persist.";
"dashboard.popup.health.detailed_description.2_3_days" = "Your bronchial tubes are relaxing, making breathing noticeably easier. This is often when withdrawal symptoms peak, but your body is making significant progress in recovery. Lung capacity is increasing, allowing deeper, more effective breaths.";
"dashboard.popup.health.detailed_description.3_7_days" = "Energy levels continue to improve as your body adapts to using oxygen more efficiently. Your lungs' natural cleaning system is beginning to recover, removing toxins more effectively. Those who make it to one week have a much higher chance of quitting permanently.";
"dashboard.popup.health.detailed_description.1_2_weeks" = "Blood circulation continues to improve throughout your body, allowing oxygen to reach muscles more efficiently. Physical activity becomes less strenuous as your cardiovascular system recovers. Many people report improvements in stress levels at this stage.";
"dashboard.popup.health.detailed_description.2_4_weeks" = "Lung function has improved by approximately 30%. Exercise tolerance is significantly enhanced, and you may notice less coughing and shortness of breath. Your risk of coronary problems has begun to decrease as blood vessels heal.";
"dashboard.popup.health.detailed_description.1_3_months" = "The tiny hair-like structures in your lungs (cilia) have regrown and function better, helping to clear mucus and reduce infection risk. Sinus congestion and shortness of breath continue to decrease. Many ex-smokers report higher energy levels by this stage.";
"dashboard.popup.health.detailed_description.3_6_months" = "Coughing and wheezing are significantly reduced as the lungs continue to heal. Your body is now much more capable of handling mucus and cleaning the lungs. Your immune system is recovering, leading to fewer respiratory infections. Many people find stress levels and cravings have greatly diminished.";
"dashboard.popup.health.detailed_description.6_12_months" = "Your lungs have undergone significant healing, with marked improvements in function. Shortness of breath is drastically reduced, and exercise capacity continues to improve. Many ex-smokers report a complete return to normal lung function around the one-year mark.";
"dashboard.popup.health.detailed_description.1_5_years" = "Your risk of heart attack has decreased to about half that of a smoker. Blood vessels and heart tissue continue to repair themselves, improving overall cardiovascular health. The risk of many smoking-related cancers has begun to decline significantly.";
"dashboard.popup.health.detailed_description.5_10_years" = "Your risk of stroke has dropped to that of a non-smoker. The risk of cancer of the mouth, throat, esophagus, and bladder is reduced by 50%. The cells that were previously precancerous have been replaced by healthy cells throughout much of your body.";
"dashboard.popup.health.detailed_description.10_plus_years" = "Your risk of dying from lung cancer is now 50-70% lower than if you had continued smoking. Your risk of developing pancreatic cancer has declined to that of a non-smoker. Your body has made a remarkable recovery from the damage caused by smoking.";

/* Dashboard Health Popup - Next Milestones */
"dashboard.popup.health.next_milestone.first_2_hours" = "In a few more hours, oxygen levels will increase and circulation will improve";
"dashboard.popup.health.next_milestone.2_12_hours" = "By 24 hours, carbon monoxide will be eliminated from your body";
"dashboard.popup.health.next_milestone.12_24_hours" = "In another day, your senses of taste and smell will begin to improve";
"dashboard.popup.health.next_milestone.1_2_days" = "Tomorrow your bronchial tubes will begin to relax, making breathing easier";
"dashboard.popup.health.next_milestone.2_3_days" = "In the next few days, your energy levels will continue to improve";
"dashboard.popup.health.next_milestone.3_7_days" = "By two weeks, your circulation will improve significantly";
"dashboard.popup.health.next_milestone.1_2_weeks" = "By one month, your lung function will improve by approximately 30%";
"dashboard.popup.health.next_milestone.2_4_weeks" = "In the coming months, your lungs' cilia will regrow, reducing infection risk";
"dashboard.popup.health.next_milestone.1_3_months" = "By 6 months, coughing and wheezing will be significantly reduced";
"dashboard.popup.health.next_milestone.3_6_months" = "At the 1-year mark, your lungs will have undergone significant healing";
"dashboard.popup.health.next_milestone.6_12_months" = "By 5 years, your risk of heart attack will decrease to half that of a smoker";
"dashboard.popup.health.next_milestone.1_5_years" = "By 10 years, your stroke risk will be the same as a non-smoker";
"dashboard.popup.health.next_milestone.5_10_years" = "After 10+ years, your risk of lung cancer will be 50-70% lower than if you had continued smoking";
"dashboard.popup.health.next_milestone.10_plus_years" = "You've reached the maximum tracked recovery milestone. Congratulations on your smoke-free life!";

/* Dashboard Health Popup - Recovery Status */
"dashboard.popup.health.recovery_status.first_2_hours" = "Carbon monoxide levels beginning to drop";
"dashboard.popup.health.recovery_status.2_12_hours" = "Oxygen levels increasing, circulation improving";
"dashboard.popup.health.recovery_status.12_24_hours" = "Carbon monoxide eliminated from body";
"dashboard.popup.health.recovery_status.1_2_days" = "Sense of taste and smell improving";
"dashboard.popup.health.recovery_status.2_3_days" = "Breathing easier as bronchial tubes relax";
"dashboard.popup.health.recovery_status.3_7_days" = "Energy levels improving each day";
"dashboard.popup.health.recovery_status.1_2_weeks" = "Circulation improving, breathing easier";
"dashboard.popup.health.recovery_status.2_4_weeks" = "Lung function improving by up to 30%";
"dashboard.popup.health.recovery_status.1_3_months" = "Cilia regrowth, improved sinus congestion";
"dashboard.popup.health.recovery_status.3_6_months" = "Reduced coughing, increased lung capacity";
"dashboard.popup.health.recovery_status.6_12_months" = "Significantly reduced respiratory symptoms";
"dashboard.popup.health.recovery_status.1_5_years" = "Risk of heart disease reduced by 50%";
"dashboard.popup.health.recovery_status.5_10_years" = "Stroke risk similar to a non-smoker";
"dashboard.popup.health.recovery_status.10_plus_years" = "Lung cancer risk reduced by 50-70%";

/* Settings - Theme Selector */
"settings.theme_selector.title" = "Select Theme";

/* Settings - Reset Progress */
"settings.reset_progress.title" = "Reset Progress";
"settings.reset_progress.message" = "Are you sure you want to reset your progress? This will set your quit date to now.";
"settings.reset_progress.cancel" = "Cancel";
"settings.reset_progress.confirm" = "Reset";

/* Edit User Info */
"edit_user_info.title" = "Edit Information";
"edit_user_info.section.quit_information" = "Quit Information";
"edit_user_info.section.cost_information" = "Cost Information";
"edit_user_info.quit_date" = "Quit Date";
"edit_user_info.cigarettes_per_day" = "Cigarettes per day";
"edit_user_info.cigarettes_per_pack" = "Cigarettes per pack";
"edit_user_info.price_per_pack" = "Price per pack";
"edit_user_info.currency_symbol" = "Currency symbol";
"edit_user_info.save" = "Save";
"edit_user_info.cancel" = "Cancel";

/* About Screen */
"about.title" = "About";
"about.app_name" = "SmokeFree";
"about.version" = "Version 1.0";
"about.description" = "SmokeFree helps you track your progress in quitting smoking, showing health improvements and money saved over time.";
"about.copyright" = "© 2025 SmokeFree App";
"about.done" = "Done"; 

"achievement.category.beginner" = "Beginner";
"achievement.category.intermediate" = "Intermediate";
"achievement.category.advanced" = "Advanced";
"achievement.category.expert" = "Expert";
"achievement.category.master" = "Master";

/* MARK: - Widget */
"widget.app_name" = "SmokeFree";
"widget.days_smoke_free" = "DAYS SMOKE-FREE";
"widget.smoke_free_for" = "Smoke-Free For";
"widget.days" = "Days";
"widget.saved" = "Saved";
"widget.not_smoked" = "Not Smoked";
"widget.health" = "Health";
"widget.health_recovery" = "Health Recovery";
"widget.days_smoke_free_count" = "%d days smoke-free";
"widget.days_short" = "days";
"widget.day_one" = "Day 1";
"widget.one_month" = "1 Month";
"widget.three_months" = "3 Months";
"widget.one_year" = "1 Year";

/* Widget Configuration */
"widget.display_style.title" = "Display Style";
"widget.display_style.simple" = "Simple";
"widget.display_style.detailed" = "Detailed";
"widget.configuration.title" = "SmokeFree Widget Configuration";
"widget.configuration.description" = "Configure how your SmokeFree widget looks and what information it displays.";

"widget.loading" = "Loading widget data...";
"widget.info" = "Widget will show your smoke-free progress";
"widget.config" = "Configure Widget";
"widget.description" = "Track your progress since quitting smoking.";

"settings.test_health_milestone" = "Test Health Milestone";
"settings.test_achievement" = "Test Achievement";

"notification.health.title" = "Health Progress Update";
"notification.health.milestone.achieved" = "Health Milestone Achieved!";
"notification.motivation.title" = "Your Daily Motivation";
"notification.achievement.preview" = "Achievement Preview";
"notification.achievement.preview.message" = "Coming soon:";

// MARK: - Achievement Notifications
"notification.achievement.title" = "Achievement Unlocked!";
"notification.achievement.body" = "You've unlocked: %@";
"notification.achievement.category.willing" = "Willing Achievement";
"notification.achievement.category.stubborn" = "Stubborn Achievement";
"notification.achievement.category.determined" = "Determined Achievement";
"notification.achievement.category.resolute" = "Resolute Achievement";
"notification.achievement.category.committed" = "Committed Achievement";

// MARK: - Health Milestone Notifications
"notification.health.milestone.title" = "Health Milestone Reached!";
"notification.health.milestone.body" = "%@: %@";
"notification.health.milestone.20_minutes" = "20 Minutes";
"notification.health.milestone.8_12_hours" = "8-12 Hours";
"notification.health.milestone.24_hours" = "24 Hours";
"notification.health.milestone.48_hours_2_days" = "48 Hours (2 Days)";
"notification.health.milestone.72_hours_3_days" = "72 Hours (3 Days)";
"notification.health.milestone.1_week" = "1 Week";
"notification.health.milestone.2_weeks" = "2 Weeks";
"notification.health.milestone.3_4_weeks_1_month" = "1 Month";
"notification.health.milestone.3_6_months" = "3-6 Months";
"notification.health.milestone.1_year" = "1 Year";
"notification.health.milestone.5_years" = "5 Years";
"notification.health.milestone.10_years" = "10 Years";
"notification.health.milestone.15_years" = "15 Years";

// MARK: - Health Milestone Descriptions
"milestone.20_minutes.desc" = "Your blood pressure and pulse rate return to normal";
"milestone.8_12_hours.desc" = "Carbon monoxide levels in your blood return to normal";
"milestone.24_hours.desc" = "Your risk of heart attack begins to decrease";
"milestone.48_hours_2_days.desc" = "Your sense of smell and taste begin to improve";
"milestone.72_hours_3_days.desc" = "Your breathing becomes easier as bronchial tubes relax";
"milestone.1_week.desc" = "Circulation improves and lung function increases up to 30%";
"milestone.2_weeks.desc" = "Walking becomes easier and your energy continues to increase";
"milestone.3_4_weeks_1_month.desc" = "Coughing and shortness of breath decrease significantly";
"milestone.3_6_months.desc" = "Lung function improves by up to 10% and circulation continues to improve";
"milestone.1_year.desc" = "Risk of coronary heart disease is half that of a smoker";
"milestone.5_years.desc" = "Stroke risk is reduced to that of a non-smoker";
"milestone.10_years.desc" = "Risk of lung cancer falls to about half that of a smoker";
"milestone.15_years.desc" = "Risk of coronary heart disease is that of a non-smoker";

// MARK: - Motivational Quotes
"motivational_quote.victory" = "Every cigarette not smoked is a victory. Keep going!";
"motivational_quote.lungs_thanking" = "Your lungs are thanking you for every smoke-free day.";
"motivational_quote.gaining_health" = "You're not giving up smoking, you're gaining a healthier life.";
"motivational_quote.cravings_pass" = "Cravings pass whether you smoke or not. Choose health.";
"motivational_quote.best_time" = "The best time to quit smoking was 20 years ago. The second best time is now.";
"motivational_quote.healing_daily" = "Your body is healing a little more with each passing day.";
"motivational_quote.healing_ability" = "Your body has an amazing ability to heal itself when given the chance.";
"motivational_quote.todays_struggle" = "Today's struggle is developing tomorrow's strength.";
"motivational_quote.rewriting_health" = "You're rewriting your health story with every smoke-free day.";
"motivational_quote.chains_of_habit" = "The chains of habit are too light to be felt until they're too heavy to be broken. Break them now.";
"motivational_quote.adding_life" = "Quitting isn't just about adding years to your life, but adding life to your years.";
"motivational_quote.important_choice" = "Your decision to quit smoking is one of the most important health choices you'll ever make.";
"motivational_quote.daily_victory" = "Each day smoke-free is a victory worth celebrating.";
"motivational_quote.discipline_weight" = "The pain of discipline weighs ounces; the pain of regret weighs tons.";
"motivational_quote.health_investment" = "Your health is an investment, not an expense.";
"motivational_quote.impossible_today" = "What seems impossible today will one day be your warm-up.";
"motivational_quote.harder_struggle" = "The harder the struggle, the more glorious the triumph.";
"motivational_quote.not_giving_up" = "You're not giving up anything by quitting - you're gaining everything.";
"motivational_quote.courage_quiet" = "Courage doesn't always roar. Sometimes it's the quiet voice saying 'I'll try again tomorrow.'";
"motivational_quote.lungs_deserve" = "Your lungs deserve a break. Your heart deserves a chance. Your body deserves better.";
"motivational_quote.secret_of_change" = "The secret of change is to focus all of your energy not on fighting the old, but on building the new.";
"motivational_quote.quitting_hard" = "Quitting smoking is hard. Not quitting is harder.";

// MARK: - Paywall Features Section
"paywall.feature.health_tracking" = "Track health improvements in real-time";
"paywall.feature.progress_charts" = "Visualize your progress with detailed charts";
"paywall.feature.money_saved" = "See money saved with every smoke-free day";
"paywall.feature.health_insights" = "Access personalized health insights";


"paywall.app_name" = "SmokeFree";
"paywall.premium_access" = "Premium Access";
"paywall.choose_plan" = "Choose Your Plan";
"paywall.free_trial_start" = "Start with 3 days free";
"paywall.continue" = "Continue";
"paywall.retry_loading" = "Retry Loading";
"paywall.terms_of_service" = "Terms of Service";
"paywall.privacy_policy" = "Privacy Policy";
"paywall.app_store_signin_title" = "App Store Sign In";
"paywall.signin_help_intro" = "To purchase subscriptions, you need to be signed in to the App Store with your Apple ID.";
"paywall.signin_help_steps_title" = "How to sign in to App Store:";
"paywall.signin_help_conclusion" = "After signing in, return to this app and try again.";
"paywall.signin_step1" = "Open the Settings app on your device";
"paywall.signin_step2" = "Scroll down and tap on 'App Store'";
"paywall.signin_step3" = "Tap on 'Apple ID: Sign in' at the top";
"paywall.signin_step4" = "Enter your Apple ID and password";
"paywall.signin_step5" = "If prompted, complete any verification steps";
"common.done" = "Done";

// MARK: - Subscription Purchase Messages
"paywall.error.no_products" = "Can't purchase: No products available";
"paywall.message.purchase_started" = "Processing your purchase...";
"paywall.message.purchase_success" = "Purchase successful!";
"paywall.error.signin_required" = "Sign in to App Store required";
"paywall.error.network" = "Network connection error. Please try again.";
"paywall.message.purchase_cancelled" = "Purchase was cancelled";
"paywall.error.payment_not_allowed" = "Payments are not allowed on this device";
"paywall.error.purchase_failed" = "Purchase failed. Please try again later.";
"paywall.error.unexpected" = "An unexpected error occurred";
"paywall.message.purchase_pending" = "Your purchase is pending approval";
"paywall.message.no_purchases_to_restore" = "No previous purchases found to restore";
"paywall.error.restore_failed" = "Could not restore purchases. Please try again later.";
"paywall.message.restore_started" = "Restoring purchases...";
"paywall.message.restore_success" = "Purchases restored successfully!";